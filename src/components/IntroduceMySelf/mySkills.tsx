'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/common/glassCard";

export default function MySkills() {
    return (
        <div className="pt-40">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="max-w-[65rem]">
                    <div className="flex items-center justify-center gap-4">
                        <Image src="/emoji_u1faaa.svg" alt="My Skills" width={50} height={50} />
                        <h2 className="text-4xl font-bold py-10">My Skills</h2>
                    </div>
                    <div className="flex justify-center pt-5 gap-10">
                        <GlassCard>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">Programming Languages</p>
                                <div className="flex flex-col gap-2">
                                    <ul>
                                        <li className="text-gray-700 text-xl">・Python</li>
                                        <li className="text-gray-700 text-xl">・JavaScript</li>
                                        <li className="text-gray-700 text-xl">・TypeScript</li>
                                        <li className="text-gray-700 text-xl">・Java</li>
                                        <li className="text-gray-700 text-xl">・Kotlin</li>
                                        <li className="text-gray-700 text-xl">・C</li>
                                        <li className="text-gray-700 text-xl">・HTML</li>
                                        <li className="text-gray-700 text-xl">・CSS</li>
                                        <li className="text-gray-700 text-xl">・Tailwind CSS</li>
                                    </ul>
                                </div>
                            </div>
                        </GlassCard>
                        <GlassCard style={{ width: '20rem', margin: "0 auto" }}>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">Frameworks</p>
                                <div className="flex flex-col gap-2">
                                    <ul>
                                        <li className="text-gray-700 text-xl">・PyTorch</li>
                                        <li className="text-gray-700 text-xl">・TensorFlow</li>
                                        <li className="text-gray-700 text-xl">・Keras</li>
                                        <li className="text-gray-700 text-xl">・LangChain</li>
                                        <li className="text-gray-700 text-xl">・LangGraph</li>
                                        <li className="text-gray-700 text-xl">・Google ADK</li>
                                        <li className="text-gray-700 text-xl">・Vercel AI SDK</li>
                                        <li className="text-gray-700 text-xl">・Next.js</li>
                                        <li className="text-gray-700 text-xl">・Vite</li>
                                        <li className="text-gray-700 text-xl">・React</li>
                                        <li className="text-gray-700 text-xl">and more...</li>
                                    </ul>
                                </div>
                            </div>
                        </GlassCard>
                        <GlassCard>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">Development Tools</p>
                                <div className="flex flex-col gap-2">
                                    <ul>
                                        <li className="text-gray-700 text-xl">・Git</li>
                                        <li className="text-gray-700 text-xl">・GitHub</li>
                                        <li className="text-gray-700 text-xl">・Hugging Face</li>
                                    </ul>
                                    <ul>
                                        <li className="text-gray-700 text-xl">・Docker</li>
                                        <li className="text-gray-700 text-xl">・Google Cloud</li>
                                        <li className="text-gray-700 text-xl">・Firebase</li>
                                        <li className="text-gray-700 text-xl">・Cursor</li>
                                        <li className="text-gray-700 text-xl">・Claude Code</li>
                                        <li className="text-gray-700 text-xl">・Gemini CLI</li>
                                        <li className="text-gray-700 text-xl">and more...</li>
                                    </ul>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}