import Image from 'next/image'

export default function IntroBoxIn(){
    return(
        <div id='skills'>
            <div className="flex items-center justify-center bg-white/90 rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-100 m-2 py-10">
                <div className="flex items-center justify-center gap-15">
                    <Image src="/yharutoIcon.svg" alt="Intro 1" width={150} height={150} className="rounded-full border-4 border-pink-50" />
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-800 text-5xl font-bold tracking-tight">
                            Y.Haruto
                        </p>
                        <p className="text-pink-300 text-2xl font-bold">
                            Deep Learning / AI Engineer majoring in LLMs.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                            I am a Deep Learning Engineer majoring in LLMs. I focus on the development of making AI helpful, useful, and accessible for everyone.<br /><br />
                            I am also developing web applications using Next.js, Vite, React, TypeScript, Tailwind CSS and more.
                            I develop web applications to make AI helpful, useful, and accessible for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}