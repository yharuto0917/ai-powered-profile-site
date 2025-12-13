'use client';
import { motion } from "framer-motion";
import MySkillsIn from "./MySkillsIn";

export default function MySkills() {
    return (
        <div className="pb-30">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex justify-center px-4 sm:px-6"
            >
                <div className="w-full max-w-[65rem]">
                    <h2 className="title-font text-2xl sm:text-3xl md:text-4xl font-bold -rotate-2 md:-rotate-4 translate-y-1 md:translate-y-2 ml-4 sm:ml-12 md:ml-20 z-5 relative">
                        My Skills
                    </h2>
                    <MySkillsIn />
                </div>
            </motion.div>
        </div>
    )
}
