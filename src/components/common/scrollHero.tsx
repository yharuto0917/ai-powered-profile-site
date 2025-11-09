'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ScrollHero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <div ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ opacity, scale, y }}
                className="flex flex-col items-center justify-center gap-8 z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2
                    }}
                >
                    <Image 
                        src="/yharutoIconLong.svg" 
                        alt="Y.Haruto Logo" 
                        width={400} 
                        height={100}
                        className="drop-shadow-2xl"
                        priority
                    />
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent pb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.4
                    }}
                >
                    AI Engineer
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.6
                    }}
                >
                    Making AI helpful, useful, and accessible for everyone
                </motion.p>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            </motion.div>

            {/* Background decorative elements */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0]) }}
            >
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            </motion.div>
        </div>
    );
}

