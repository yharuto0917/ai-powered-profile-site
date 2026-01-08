"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import type { ChatMessage } from "./askMeWithAI";

type AskMeWithAIChatUIProps = {
    messages: ChatMessage[];
    isChatOpen: boolean;
    onClose: () => void;
};

export default function AskMeWithAIChatUI({ messages, isChatOpen, onClose }: AskMeWithAIChatUIProps) {
    const chatContainerRef = useRef<HTMLDivElement | null>(null);

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

    return (
        <div
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out ${isChatOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
                }`}
        >
            <div className="w-96 h-80 rounded-3xl overflow-hidden border-2 border-[#FFB7C5] bg-[#FFF5F7] shadow-[0_10px_25px_rgba(255,183,197,0.4)]">
                <div className="bg-[#FFB7C5] p-4 flex items-center justify-between">
                    <h3 className="text-white font-bold text-sm tracking-wide">Ask Me With AI</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-white hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
                        aria-label="チャットを閉じる"
                    >
                        <ChevronDown size={20} />
                    </button>
                </div>
                <div
                    ref={chatContainerRef}
                    className="h-[calc(100%-4rem)] overflow-y-auto p-4 space-y-4"
                >
                    {messages.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-[#d48a97] gap-2">
                            <span className="text-sm">まだメッセージはありません</span>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[75%] px-4 py-2.5 shadow-sm transition-all duration-200 ${msg.sender === "user"
                                            ? "bg-[#FFB7C5] text-white rounded-2xl rounded-tr-sm"
                                            : "bg-white text-[#5d4037] border border-[#FFB7C5]/20 rounded-2xl rounded-tl-sm"
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed font-medium">{msg.text}</p>
                                    <p
                                        className={`text-[10px] mt-1.5 text-right ${msg.sender === "user" ? "text-white/80" : "text-[#d48a97]"
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
    );
}
