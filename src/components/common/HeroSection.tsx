'use client';
import RotatingText from '@/components/ui/RotatingText';
import { motion, LayoutGroup } from 'framer-motion';

export default function HeroSection() {
    return (
        <LayoutGroup>
            <div className="flex flex-col sm:flex-row items-center justify-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 gap-2 sm:gap-0">
                <motion.div layout="position" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                    Making AI
                </motion.div>
                <motion.div layout="size" className="inline-block">
                    <RotatingText
                        texts={['Helpful', 'Meaningful', 'Valuable', 'Useful']}
                        mainClassName="mx-2 sm:mx-3 md:mx-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center inline-block bg-red-100 rounded-lg px-3 sm:px-4 py-1 sm:py-2"
                        staggerFrom="last" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }}
                        staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000}
                    />
                </motion.div>
                <motion.div layout="position" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                    for everyone.
                </motion.div>
            </div>
        </LayoutGroup>
    );
}
