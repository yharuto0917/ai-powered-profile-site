"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Send, X } from "lucide-react";
import AskMeWithAIChatUI from "./askMeWithAIChatUI";

export type ChatMessage = {
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

    const autoExpandLockedRef = useRef(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const showInput = displayState !== "collapsed";

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 160;

            setDisplayState((prev) => {
                if (!scrolled) {
                    return autoExpandLockedRef.current ? prev : "expandedAuto";
                }

                if (prev === "expandedAuto") {
                    autoExpandLockedRef.current = true;
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


    const handleExpand = () => {
        setDisplayState("expandedManual");
    };

    const handleClose = () => {
        autoExpandLockedRef.current = true;
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
                text: "現在、Ask Me With AIは使用できません。",
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
                <AskMeWithAIChatUI
                    messages={messages}
                    isChatOpen={isChatOpen}
                    onClose={handleCollapseChat}
                />

                <div
                    className={`relative overflow-hidden rounded-full border-2 border-[#FFB7C5] bg-[#FFF5F7] transition-all duration-500 ease-in-out ${showInput
                            ? "w-96 h-14 shadow-[0_10px_25px_rgba(255,183,197,0.4)]"
                            : "w-60 h-12 shadow-[0_8px_20px_rgba(255,183,197,0.3)] hover:scale-105 cursor-pointer"
                        }`}
                >
                    <div
                        className={`absolute inset-0 flex items-center justify-center px-6 text-[#5d4037] font-bold tracking-wide transition-all duration-300 ${showInput ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}
                        onClick={handleExpand}
                    >
                        <span>Ask Me With AI</span>
                    </div>

                    <div
                        className={`absolute inset-0 flex items-center px-4 transition-all duration-300 ${showInput ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <button
                            type="button"
                            onClick={handleClose}
                            className="mr-3 p-1.5 rounded-full text-[#FFB7C5] hover:bg-[#FFB7C5]/10 transition-colors duration-200"
                        >
                            <X size={20} />
                        </button>

                        <input
                            ref={inputRef}
                            type="text"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            onKeyDown={handleKeyDown}
                            onCompositionStart={handleCompositionStart}
                            onCompositionEnd={handleCompositionEnd}
                            placeholder="AIに質問"
                            className="flex-1 bg-transparent outline-none text-sm text-[#5d4037] placeholder:text-[#d48a97] font-medium"
                            disabled={!showInput}
                        />

                        <button
                            type="button"
                            onClick={handleSend}
                            disabled={!message.trim()}
                            className={`ml-3 rounded-full p-2.5 transition-all duration-200 ${message.trim()
                                    ? "bg-[#FFB7C5] text-white hover:scale-105 shadow-md"
                                    : "bg-pink-100/50 text-[#FFB7C5] cursor-not-allowed"
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