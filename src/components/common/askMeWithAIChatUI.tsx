"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Send, Loader2 } from "lucide-react";
import { useSubmitJP } from "use-submit-jp";
import type { UIMessage } from "ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatStatus = "submitted" | "streaming" | "ready" | "error";

type AskMeWithAIChatUIProps = {
    messages: UIMessage[];
    status: ChatStatus;
    isChatOpen: boolean;
    onClose: () => void;
    input: string;
    onInputChange: (value: string) => void;
    onSend: () => void;
};

export default function AskMeWithAIChatUI({
    messages,
    status,
    isChatOpen,
    onClose,
    input,
    onInputChange,
    onSend,
}: AskMeWithAIChatUIProps) {
    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const drawerInputRef = useRef<HTMLInputElement | null>(null);
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const [mounted, setMounted] = useState(false);
    const [dragOffsetY, setDragOffsetY] = useState(0);
    const isDragging = useRef(false);
    const dragStartY = useRef(0);

    const { formProps } = useSubmitJP({
        onSubmit: (e) => {
            e.preventDefault();
            onSend();
        },
    });

    const handleDragStart = (clientY: number) => {
        isDragging.current = true;
        dragStartY.current = clientY;
        setDragOffsetY(0);
    };

    const handleDragMove = (clientY: number) => {
        if (!isDragging.current) return;
        const delta = clientY - dragStartY.current;
        setDragOffsetY(Math.max(0, delta));
    };

    const handleDragEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        if (dragOffsetY > 100) {
            setDragOffsetY(0);
            onClose();
        } else {
            setDragOffsetY(0);
        }
    };

    const onTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientY);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientY);
    };
    const onTouchEnd = () => handleDragEnd();

    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDragStart(e.clientY);
    };

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientY);
        const onMouseUp = () => handleDragEnd();

        if (isChatOpen) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isChatOpen || !chatContainerRef.current) return;

        const timeoutId = window.setTimeout(() => {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        }, 120);

        return () => window.clearTimeout(timeoutId);
    }, [messages, isChatOpen]);

    useEffect(() => {
        if (isChatOpen) {
            document.body.style.overflow = "hidden";
            const timeoutId = window.setTimeout(() => {
                drawerInputRef.current?.focus();
            }, 500);
            return () => window.clearTimeout(timeoutId);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isChatOpen]);

    if (!mounted) return null;

    const isLoading = status === "submitted" || status === "streaming";

    const drawer = (
        <>
            <div
                className={`fixed inset-0 z-[55] bg-black/30 transition-opacity duration-500 ${
                    isChatOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            <div
                className={`fixed bottom-0 left-0 right-0 z-[56] flex justify-center ${
                    isChatOpen ? "" : "pointer-events-none"
                }`}
                onClick={onClose}
            >
                <div
                    ref={drawerRef}
                    className={`w-full md:w-1/2 rounded-t-3xl overflow-hidden bg-white shadow-[0_-10px_25px_rgba(0,0,0,0.08)] flex flex-col pointer-events-auto ${
                        isDragging.current ? "" : "transition-transform duration-500 ease-out"
                    } ${isChatOpen ? "" : "translate-y-full"}`}
                    style={isChatOpen && dragOffsetY > 0 ? { transform: `translateY(${dragOffsetY}px)` } : undefined}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className="flex justify-center pt-3 pb-1 bg-white cursor-grab active:cursor-grabbing select-none touch-none"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                    >
                        <div className="w-10 h-1 rounded-full bg-[#FFB7C5]/40" />
                    </div>

                    <div
                        className="bg-white px-4 pb-3 flex items-center cursor-grab active:cursor-grabbing select-none touch-none"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                    >
                        <h3 className="text-[#5d4037] font-bold text-sm tracking-wide">Ask Me With AI</h3>
                    </div>

                    <div
                        ref={chatContainerRef}
                        className="h-[50dvh] overflow-y-auto p-4 space-y-4 bg-white"
                    >
                        {messages.length === 0 ? (
                            <div className="flex h-full flex-col items-center justify-center text-[#d48a97] gap-2">
                                <span className="text-sm">まだメッセージはありません</span>
                            </div>
                        ) : (
                            <>
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                        <div
                                            className={`max-w-[75%] px-4 py-2.5 shadow-sm transition-all duration-200 ${msg.role === "user"
                                                    ? "bg-[#FFB7C5]/20 text-[#5d4037] border border-[#FFB7C5]/30 rounded-2xl rounded-tr-sm"
                                                    : "bg-gray-50 text-[#5d4037] border border-gray-200 rounded-2xl rounded-tl-sm"
                                                }`}
                                        >
                                            <div className="text-sm leading-relaxed font-medium">
                                                {msg.parts.map((part, i) => {
                                                    if (part.type === "text") {
                                                        return msg.role === "assistant" ? (
                                                            <ReactMarkdown
                                                                key={i}
                                                                remarkPlugins={[remarkGfm]}
                                                                components={{
                                                                    a: ({ ...props }) => (
                                                                        <a
                                                                            {...props}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-[#d48a97] underline hover:text-[#FFB7C5]"
                                                                        />
                                                                    ),
                                                                    p: ({ ...props }) => <p {...props} className="mb-2 last:mb-0" />,
                                                                    ul: ({ ...props }) => <ul {...props} className="list-disc pl-4 mb-2" />,
                                                                    ol: ({ ...props }) => <ol {...props} className="list-decimal pl-4 mb-2" />,
                                                                    code: ({ ...props }) => (
                                                                        <code
                                                                            {...props}
                                                                            className="bg-gray-100 rounded px-1 py-0.5 text-xs font-mono"
                                                                        />
                                                                    ),
                                                                }}
                                                            >
                                                                {part.text}
                                                            </ReactMarkdown>
                                                        ) : (
                                                            <p key={i}>{part.text}</p>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {status === "submitted" && (
                                    <div className="flex justify-start">
                                        <div className="max-w-[75%] px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl rounded-tl-sm shadow-sm">
                                            <Loader2 size={16} className="animate-spin text-[#d48a97]" />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    <form {...formProps} className="bg-white px-4 py-3 flex items-center gap-3">
                        <input
                            ref={drawerInputRef}
                            type="text"
                            value={input}
                            onChange={(event) => onInputChange(event.target.value)}
                            placeholder="AIに質問"
                            className="flex-1 bg-gray-50 rounded-full px-4 py-2.5 outline-none text-sm text-[#5d4037] placeholder:text-[#d48a97] font-medium border border-gray-200 focus:border-[#FFB7C5]/50 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            className={`shrink-0 rounded-full p-2.5 transition-all duration-200 ${input.trim() && !isLoading
                                    ? "bg-[#FFB7C5] text-white hover:scale-105 shadow-md"
                                    : "bg-pink-100/50 text-[#FFB7C5] cursor-not-allowed"
                                }`}
                        >
                            {isLoading ? (
                                <Loader2 size={16} className="animate-spin" />
                            ) : (
                                <Send size={16} />
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );

    return createPortal(drawer, document.body);
}
