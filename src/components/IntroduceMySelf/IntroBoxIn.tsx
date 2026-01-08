import Image from 'next/image'

export default function IntroBoxIn() {
    return (
        <div className="w-full">
            <div 
                data-scroll-center="true"
                className="flex items-center justify-center bg-white/90 rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-100 py-12 sm:py-16 md:py-20 px-4 sm:px-8"
            >
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-14 w-full max-w-5xl">
                    <Image src="/yharutoIcon.svg" alt="Intro 1" width={150} height={150} className="rounded-full border-4 border-pink-50 w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px]" />
                    <div className="flex flex-col gap-4 text-center md:text-left max-w-3xl">
                        <p className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                            Y.Haruto
                        </p>
                        <p className="text-pink-300 text-lg sm:text-xl md:text-2xl font-bold">
                            Deep Learning / AI Engineer majoring in LLMs.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                            I am a Deep Learning Engineer majoring in LLMs. I aim to advance SLMs operating on-device to a frontier level using inference techniques based on improved quantization technology and reinforcement learning based reasoning.
                            <br /><br />
                            I am also developing web applications using Next.js, Vite, React, TypeScript, Tailwind CSS and more. I aim to make AI easier and more accessible for many people through AI Chatbots and AI Agents.
                            <br /><br />
                            My belief is "Making AI Helpful for Everyone." and I strive to develop AI that leaves no one behind.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
