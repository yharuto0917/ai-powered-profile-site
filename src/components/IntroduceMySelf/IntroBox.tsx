'use client';
import { motion } from "framer-motion";
import IntroBoxIn from "./IntroBoxIn";

export default function IntroBox() {
    return (
        <div id="about" className="mt-20 mb-60">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex justify-center"
            >
                <div className="w-full max-w-[65rem]">
                    <h2 className="title-font text-4xl font-bold -rotate-4 ml-20 z-5 relative">Introduce Myself</h2>
                    <IntroBoxIn />
                </div>
            </motion.div>
        </div>
    )
}
