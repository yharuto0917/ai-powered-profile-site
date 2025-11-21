'use client';
import { motion } from "framer-motion";
import MySkillsIn from "./MySkillsIn";

export default function MySkills() {
    return (
        <div className="pt-30">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h2 className="title-font text-4xl font-bold -rotate-4 ml-20 z-5 relative">My Skills</h2>
                <MySkillsIn />
            </motion.div>
        </div>
    )
}