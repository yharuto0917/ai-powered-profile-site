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
                    <h2 className="title-font text-2xl sm:text-4xl -rotate-4 md:-rotate-2 font-bold ml-10 md:ml-10 relative">
                        Introduce Myself
                    </h2>
                    <IntroBoxIn />
                </div>
            </motion.div>
        </div>
    )
}
