"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronDown, Send, X } from "lucide-react";

type ChatMessage = {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: string;
};

type DisplayState = "expandedAuto" | "collapsed" | "expandedManual";

export default function AskMeWithAI() {
    const [displayState, setDisplayState] = useState<DisplayState>("expandedAuto");
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isComposing, setIsComposing] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    const showInput = displayState !== "collapsed";

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 160;

            setDisplayState((prev) => {
                if (!scrolled) {
                    return "expandedAuto";
                }

                if (prev === "expandedAuto") {
                    return "collapsed";
                }

                return prev;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!showInput) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            inputRef.current?.focus();
        }, 300);

        return () => window.clearTimeout(timeoutId);
    }, [showInput]);

    useEffect(() => {
        if (!isChatOpen || !chatContainerRef.current) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        }, 120);

        return () => window.clearTimeout(timeoutId);
    }, [messages, isChatOpen]);

    const handleExpand = () => {
        setDisplayState("expandedManual");
    };

    const handleClose = () => {
        setDisplayState("collapsed");
        setIsChatOpen(false);
        setMessage("");
    };

    const handleCollapseChat = () => {
        setIsChatOpen(false);
    };

    const handleSend = () => {
        const trimmed = message.trim();
        if (!trimmed) {
            return;
        }

        const timestamp = new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });

        const newMessage: ChatMessage = {
            id: Date.now(),
            text: trimmed,
            sender: "user",
            timestamp,
        };

        setMessages((prev) => [...prev, newMessage]);
        setMessage("");

        if (!isChatOpen) {
            setIsChatOpen(true);
        }

        window.setTimeout(() => {
            const replyTimestamp = new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });

            const botReply: ChatMessage = {
                id: Date.now() + 1,
                text: "メッセージを受信しました！",
                sender: "bot",
                timestamp: replyTimestamp,
            };

            setMessages((prev) => [...prev, botReply]);
        }, 1000);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && !event.shiftKey && !isComposing) {
            event.preventDefault();
            handleSend();
        }
    };

    const handleCompositionStart = () => {
        setIsComposing(true);
    };

    const handleCompositionEnd = () => {
        setIsComposing(false);
    };

    return (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
            <div className="relative flex justify-center">
                <div
                    className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out ${
                        isChatOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
                >
                    <div className="w-80 h-80 rounded-3xl overflow-hidden border border-pink-300/40 bg-white/90 shadow-[0_20px_45px_rgba(244,114,182,0.25)] backdrop-blur">
                        <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 p-4 flex items-center justify-between">
                            <h3 className="text-white font-semibold text-sm">Ask Me With AI</h3>
                            <button
                                type="button"
                                onClick={handleCollapseChat}
                                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
                                aria-label="チャットを閉じる"
                            >
                                <ChevronDown size={18} />
                            </button>
                        </div>
                        <div
                            ref={chatContainerRef}
                            className="h-[calc(100%-4rem)] overflow-y-auto p-4 space-y-3"
                        >
                            {messages.length === 0 ? (
                                <div className="flex h-full items-center justify-center text-sm text-gray-400">
                                    まだメッセージはありません
                                </div>
                            ) : (
                                messages.map((msg) => (
                                    <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                        <div
                                            className={`max-w-[70%] rounded-2xl px-4 py-2 shadow-sm ${
                                                msg.sender === "user"
                                                    ? "bg-gradient-to-r from-pink-400 to-rose-500 text-white"
                                                    : "bg-pink-50 text-gray-700"
                                            }`}
                                        >
                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                            <p
                                                className={`text-[11px] mt-1 ${
                                                    msg.sender === "user" ? "text-white/70" : "text-pink-400"
                                                }`}
                                            >
                                                {msg.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className={`relative overflow-hidden rounded-full border border-pink-400/30 bg-pink-50/80 backdrop-blur-lg transition-all duration-500 ease-in-out ${
                        showInput
                            ? "w-96 h-14 shadow-[0_16px_35px_rgba(244,114,182,0.35)]"
                            : "w-60 h-12 shadow-[0_12px_30px_rgba(244,114,182,0.25)] hover:scale-105 cursor-pointer"
                    }`}
                >
                    <div
                        className={`absolute inset-0 flex items-center justify-center px-6 text-gray-800 font-medium transition-all duration-300 ${
                            showInput ? "opacity-0 pointer-events-none" : "opacity-100"
                        }`}
                        onClick={handleExpand}
                    >
                        <span>Ask Me With AI</span>
                    </div>

                    <div
                        className={`absolute inset-0 flex items-center px-4 transition-all duration-300 ${
                            showInput ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    >
                        <button
                            type="button"
                            onClick={handleClose}
                            className="mr-3 p-1.5 rounded-full text-pink-400 hover:text-pink-500 hover:bg-pink-100 transition-colors"
                        >
                            <X size={18} />
                        </button>

                        <input
                            ref={inputRef}
                            type="text"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            onKeyDown={handleKeyDown}
                            onCompositionStart={handleCompositionStart}
                            onCompositionEnd={handleCompositionEnd}
                            placeholder="Geminiに質問"
                            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                            disabled={!showInput}
                        />

                        <button
                            type="button"
                            onClick={handleSend}
                            disabled={!message.trim()}
                            className={`ml-3 rounded-full p-2 transition-all duration-200 ${
                                message.trim()
                                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:scale-105 shadow-[0_8px_20px_rgba(244,114,182,0.35)]"
                                    : "bg-pink-100 text-pink-300 cursor-not-allowed"
                            }`}
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}