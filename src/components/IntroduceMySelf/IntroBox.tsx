'use client';
import { motion } from "framer-motion";
import IntroBoxIn from "./IntroBoxIn";

export default function IntroBox() {
    return (
        <div id="about" className="mt-12 sm:mt-20 mb-36 sm:mb-80">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex justify-center px-4 sm:px-6"
            >
                <div className="w-full max-w-[65rem]">
                    <h2 className="title-font text-2xl sm:text-3xl md:text-4xl font-bold -rotate-2 md:-rotate-4 ml-4 sm:ml-12 md:ml-20 z-5 relative">
                        Introduce Myself
                    </h2>
                    <IntroBoxIn />
                </div>
            </motion.div>
        </div>
    )
}
