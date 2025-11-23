'use client';
import React from 'react';
import { Github, Twitter, Instagram, Smile, BookOpenText, AtSign } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SNSBox() {
    return (
        <div className="pt-30 pb-20" id="sns">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex justify-center"
            >
                <div className="w-full max-w-[65rem]">
                    <h2 className="title-font text-4xl font-bold -rotate-4 ml-20 z-5 relative">Social Media</h2>
                    <div className="bg-white/90 rounded-3xl shadow-lg shadow-pink-100 border border-pink-100 p-6 m-2 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {/* GitHub */}
                            <Link href="https://github.com/yharuto0917" target="_blank" rel="noopener noreferrer"
                                className="flex flex-col items-center gap-3 group p-4 rounded-2xl hover:bg-pink-50/50 transition-all duration-300">
                                <div className="p-3 bg-gray-100 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                                    <Github className="w-8 h-8 text-gray-700 group-hover:text-black" />
                                </div>
                                <span className="font-medium text-gray-600 group-hover:text-pink-500">GitHub</span>
                            </Link>

                            {/* Hugging Face */}
                            <Link href="https://huggingface.co/YHaruto" target="_blank" rel="noopener noreferrer"
                                className="flex flex-col items-center gap-3 group p-4 rounded-2xl hover:bg-pink-50/50 transition-all duration-300">
                                <div className="p-3 bg-yellow-100 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                                    <Smile className="w-8 h-8 text-gray-700 group-hover:text-yellow-600" />
                                </div>
                                <span className="font-medium text-gray-600 group-hover:text-pink-500">HuggingFace</span>
                            </Link>

                            {/* X (Twitter) */}
                            <Link href="https://x.com/Yharuto09171700" target="_blank" rel="noopener noreferrer"
                                className="flex flex-col items-center gap-3 group p-4 rounded-2xl hover:bg-pink-50/50 transition-all duration-300">
                                <div className="p-3 bg-black/5 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                                    <Twitter className="w-8 h-8 text-gray-700 group-hover:text-black" />
                                </div>
                                <span className="font-medium text-gray-600 group-hover:text-pink-500">Twitter(X)</span>
                            </Link>

                            {/* Instagram */}
                            <Link href="https://instagram.com/yamazaki.ha" target="_blank" rel="noopener noreferrer"
                                className="flex flex-col items-center gap-3 group p-4 rounded-2xl hover:bg-pink-50/50 transition-all duration-300">
                                <div className="p-3 bg-pink-100 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                                    <Instagram className="w-8 h-8 text-gray-700 group-hover:text-pink-600" />
                                </div>
                                <span className="font-medium text-gray-600 group-hover:text-pink-500">Instagram</span>
                            </Link>

                            {/* Threads */}
                            <Link href="https://threads.com/@yamazaki.ha" target="_blank" rel="noopener noreferrer"
                                className="flex flex-col items-center gap-3 group p-4 rounded-2xl hover:bg-pink-50/50 transition-all duration-300">
                                <div className="p-3 bg-gray-100 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                                    <AtSign className="w-8 h-8 text-gray-700 group-hover:text-black" />
                                </div>
                                <span className="font-medium text-gray-600 group-hover:text-pink-500">Threads</span>
                            </Link>

                            {/* Zenn */}
                            <Link href="https://zenn.dev/oimachi" target="_blank" rel="noopener noreferrer"
                                className="flex flex-col items-center gap-3 group p-4 rounded-2xl hover:bg-pink-50/50 transition-all duration-300">
                                <div className="p-3 bg-blue-100 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                                    <BookOpenText className="w-8 h-8 text-gray-700 group-hover:text-blue-500" />
                                </div>
                                <span className="font-medium text-gray-600 group-hover:text-pink-500">Zenn</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}