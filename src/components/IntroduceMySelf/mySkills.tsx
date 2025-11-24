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
                className="flex justify-center"
            >
                <div className="w-full max-w-[65rem]">
                    <h2 className="title-font text-4xl font-bold -rotate-4 translate-y-2 ml-20 z-5 relative">My Skills</h2>
                    <MySkillsIn />
                </div>
            </motion.div>
        </div>
    )
}