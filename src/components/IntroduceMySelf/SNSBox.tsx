import React from 'react';
import { Github, Twitter, Instagram, AtSign } from 'lucide-react';
import Link from 'next/link';

export default function SNSBox() {
    return (
        <div className="flex justify-center pt-10 pb-20" id="sns">
            <div className="bg-white/90 rounded-3xl shadow-lg shadow-pink-100/40 border border-pink-100 p-8 w-full max-w-[65rem]">
                <h2 className="text-pink-400 text-3xl font-bold mb-8 text-center">SNS</h2>
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
                            <svg className="w-8 h-8 text-gray-700 group-hover:text-yellow-600" viewBox="0 0 100 100" fill="currentColor">
                                <path d="M93.7930402,70.08 C94.5430402,72.24 94.3630402,74.54 93.3630402,76.54 C92.6430402,78 91.6130402,79.13 90.3530402,80.14 C88.8330402,81.34 86.9430402,82.36 84.6630402,83.34 C81.9430402,84.5 78.6230402,85.59 77.1030402,85.99 C73.2130402,87 69.4730402,87.64 65.6830402,87.67 C60.2630402,87.72 55.5930402,86.44 52.2730402,83.17 C50.5530402,83.38 48.8130402,83.5 47.0630402,83.5 C45.4030402,83.5 43.7630402,83.4 42.1330402,83.2 C38.8030402,86.45 34.1530402,87.72 28.7530402,87.67 C24.9630402,87.64 21.2230402,87 17.3230402,85.99 C15.8130402,85.59 12.4930402,84.5 9.77304019,83.34 C7.49304019,82.36 5.60304019,81.34 4.09304019,80.14 C2.82304019,79.13 1.79304019,78 1.07304019,76.54 C0.0830401858,74.54 -0.106959814,72.24 0.653040186,70.08 C-0.0469598142,68.43 -0.226959814,66.54 0.323040186,64.45 C0.573040186,63.5 0.983040186,62.62 1.50304019,61.84 M13,14.7890193 C22.8284801,14.7890193 26,6.02605902 26,1.5261751 C26,-0.812484109 24.4279133,-0.0763570998 21.9099482,1.17020987 C19.5830216,2.32219957 16.4482998,3.91011313 13,3.91011313 C5.82029825,3.91011313 0,-2.97370882 0,1.5261751 C0,6.02605902 3.17151989,14.7890193 13,14.7890193 Z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-600 group-hover:text-pink-500">HuggingFace</span>
                    </Link>

                    {/* X (Twitter) */}
                    <Link href="https://x.com/Yharuto09171700" target="_blank" rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 group p-4 rounded-2xl hover:bg-pink-50/50 transition-all duration-300">
                        <div className="p-3 bg-black/5 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                            <Twitter className="w-8 h-8 text-gray-700 group-hover:text-black" />
                        </div>
                        <span className="font-medium text-gray-600 group-hover:text-pink-500">X</span>
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
                            <svg className="w-8 h-8 text-gray-700 group-hover:text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.2 4H4.8C4.36 4 4 4.36 4 4.8V19.2C4 19.64 4.36 20 4.8 20H19.2C19.64 20 20 19.64 20 19.2V4.8C20 4.36 19.64 4 19.2 4ZM15.8 14.8L10.2 8H15V6H8.2V7.2L13.8 14H9V16H15.8V14.8Z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-600 group-hover:text-pink-500">Zenn</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}