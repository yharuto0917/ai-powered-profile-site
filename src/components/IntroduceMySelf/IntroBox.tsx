import { GlassCard } from "@/components/common/glassCard";
import Image from "next/image";

export default function IntroBox() {
    return (
        <GlassCard style={{ maxWidth: '1000px' }}>
            <div className="flex justify-left gap-4">
                <h2 className="text-2xl font-bold mb-4">Introduce Myself</h2>
            </div>
            <div className="flex justify-center gap-2">
                <Image src="/yharutoIcon.svg" alt="Intro 1" width={100} height={100} className="mx-4" />
                <div className="flex flex-col gap-2">
                    <p className="text-gray-700 text-2xl font-bold">
                        Y.Haruto
                    </p>
                    <p className="text-gray-700 text-lg">
                        Machine and Deep Learning / AI Engineer majoring in LLMs.
                    </p>
                    <p className="text-gray-700">
                        I am a Machine Learning Engineer majoring in LLMs. I foucs on the development of making AI helpful, useful, and accessible for everyone.
                        I am also developing web applications using Next.js, Vite, React, TypeScript, Tailwind CSS and more.
                    </p>
                </div>
            </div>
        </GlassCard>
    )
}
