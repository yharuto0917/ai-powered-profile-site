'use client';

import { GlassCard } from "@/components/common/glassCard";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroBox() {
    return (
        <>
            <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            >
                <GlassCard>
                    <div className="flex items-center justify-center gap-4">
                        <Image src="/yharutoIcon.svg" alt="Intro 1" width={150} height={150} className="mx-10" />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-4xl font-bold mb-4">Introduce Myself</h2>
                            <p className="text-gray-700 text-4xl font-bold">
                                Y.Haruto
                            </p>
                            <p className="text-gray-700 text-2xl font-bold">
                                Machine and Deep Learning / AI Engineer majoring in LLMs.
                            </p>
                            <p className="text-gray-700 text-xl">
                                I am a Machine Learning Engineer majoring in LLMs. I foucs on the development of making AI helpful, useful, and accessible for everyone.<br /><br />
                                I am also developing web applications using Next.js, Vite, React, TypeScript, Tailwind CSS and more.
                                I develop web applications to make AI helpful, useful, and accessible for everyone.
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </motion.div>
        </>
    )
}
