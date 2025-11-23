"use client"
import { motion } from "framer-motion";
import ChangeLogIn from "./changelogIn";

export default function ChangeLog() {
    return (
        <div id="changelog" className="mt-20 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex justify-center"
            >
                <div className="w-full max-w-[65rem]">
                    <h2 className="title-font text-4xl font-bold -rotate-4 ml-20 z-5 relative">Change Log</h2>
                    <ChangeLogIn />
                </div>
            </motion.div>
        </div>
    );
}