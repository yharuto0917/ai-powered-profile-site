import React from 'react';

export default function MySkillsIn() {
    return (
        <div className="flex justify-center pt-5 gap-10">
            {/* Programming Languages */}
            <div className="flex flex-col gap-2 bg-white/90 rounded-3xl shadow-lg shadow-pink-100/40 border border-pink-100 p-8">
                <p className="text-gray-800 text-2xl font-bold">Programming Languages</p>
                <div className="flex flex-col gap-2">
                    <ul>
                        <li className="text-gray-600 text-xl">・Python</li>
                        <li className="text-gray-600 text-xl">・JavaScript</li>
                        <li className="text-gray-600 text-xl">・TypeScript</li>
                        <li className="text-gray-600 text-xl">・Java</li>
                        <li className="text-gray-600 text-xl">・Kotlin</li>
                        <li className="text-gray-600 text-xl">・C</li>
                        <li className="text-gray-600 text-xl">・HTML</li>
                        <li className="text-gray-600 text-xl">・CSS</li>
                        <li className="text-gray-600 text-xl">・Tailwind CSS</li>
                    </ul>
                </div>
            </div>

            {/* Frameworks */}
            <div className="flex flex-col gap-2 bg-white/90 rounded-3xl shadow-lg shadow-pink-100/40 border border-pink-100 p-8 w-[20rem]">
                <p className="text-gray-800 text-2xl font-bold">Frameworks</p>
                <div className="flex flex-col gap-2">
                    <ul>
                        <li className="text-gray-600 text-xl">・PyTorch</li>
                        <li className="text-gray-600 text-xl">・TensorFlow</li>
                        <li className="text-gray-600 text-xl">・Keras</li>
                        <li className="text-gray-600 text-xl">・LangChain</li>
                        <li className="text-gray-600 text-xl">・LangGraph</li>
                        <li className="text-gray-600 text-xl">・Google ADK</li>
                        <li className="text-gray-600 text-xl">・Vercel AI SDK</li>
                        <li className="text-gray-600 text-xl">・Next.js</li>
                        <li className="text-gray-600 text-xl">・Vite</li>
                        <li className="text-gray-600 text-xl">・React</li>
                        <li className="text-gray-600 text-xl">and more...</li>
                    </ul>
                </div>
            </div>

            {/* Development Tools */}
            <div className="flex flex-col gap-2 bg-white/90 rounded-3xl shadow-lg shadow-pink-100/40 border border-pink-100 p-8">
                <p className="text-gray-800 text-2xl font-bold">Development Tools</p>
                <div className="flex flex-col gap-2">
                    <ul>
                        <li className="text-gray-600 text-xl">・Git</li>
                        <li className="text-gray-600 text-xl">・GitHub</li>
                        <li className="text-gray-600 text-xl">・Hugging Face</li>
                    </ul>
                    <ul>
                        <li className="text-gray-600 text-xl">・Docker</li>
                        <li className="text-gray-600 text-xl">・Google Cloud</li>
                        <li className="text-gray-600 text-xl">・Firebase</li>
                        <li className="text-gray-600 text-xl">・Cursor</li>
                        <li className="text-gray-600 text-xl">・Claude Code</li>
                        <li className="text-gray-600 text-xl">・Gemini CLI</li>
                        <li className="text-gray-600 text-xl">and more...</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
