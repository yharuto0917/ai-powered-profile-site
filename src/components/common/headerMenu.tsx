'use client';
import StaggeredMenu from '@/components/ui/StaggeredMenu';
import RotatingText from '@/components/ui/RotatingText'
import { motion, LayoutGroup } from 'framer-motion';


interface MenuItem {
    label: string;
    ariaLabel: string;
    link: string;
}

interface SocialItem {
    label: string;
    link: string;
}

const menuItems: MenuItem[] = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Skills', ariaLabel: 'View my skills', link: '/skills' },
    { label: 'Photos', ariaLabel: 'View my photos', link: '/photos' },
    { label: 'Ask Me with AI', ariaLabel: 'Ask me with AI', link: '/ask-me-with-ai' },
    { label: 'SNS', ariaLabel: 'View my SNS', link: '/sns' }
];

const socialItems: SocialItem[] = [
    { label: 'GitHub', link: 'https://github.com/yharuto0917' },
    { label: 'Hugging Face', link: 'https://huggingface.co/YHaruto' },
    { label: 'Twitter(X)', link: 'https://x.com/Yharuto09171700' },
    { label: 'Instagram', link: 'https://instagram.com/yamazaki.ha' },
    { label: 'Threads', link: 'https://threads.com/@yamazaki.ha' },
];

export default function HeaderMenu() {
    return (
        <div style={{ height: '100vh', width: '100%', overflowX: 'hidden' }}>
            <StaggeredMenu
                position="right"
                isFixed={true}
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#f6a1df"
                openMenuButtonColor="#f6a1df"
                changeMenuColorOnOpen={true}
                colors={['#d49cc7', '#fd90f1']}
                logoUrl="/yharutoIconLong.svg"
                accentColor="#ff6b6b"
                onMenuOpen={() => {}}
                onMenuClose={() => {}}
            />
            <LayoutGroup>
                <div className="flex flex-row items-center justify-center text-align-center text-center w-full absolute top-1/4">
                    <motion.div
                        layout="position"
                        transition={{ 
                            layout: { 
                                duration: 0.5, 
                                ease: "easeInOut"
                            } 
                        }}
                        className="text-6xl font-bold text-center whitespace-nowrap"
                    >
                        Making AI
                    </motion.div>
                    <motion.div
                        layout="size"
                        transition={{ 
                            layout: { 
                                duration: 0.5, 
                                ease: "easeInOut"
                            } 
                        }}
                        className="inline-block"
                    >
                        <RotatingText
                            texts={['Helpful', 'Meaningful', 'Valuable', 'Useful', 'Enjoyable']}
                            mainClassName="mx-5 text-6xl font-bold text-center inline-block bg-red-100 rounded-lg px-4 py-2"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </motion.div>
                    <motion.div
                        layout="position"
                        transition={{ 
                            layout: { 
                                duration: 0.5, 
                                ease: "easeInOut"
                            } 
                        }}
                        className="text-6xl font-bold text-center whitespace-nowrap"
                    >
                        for everyone.
                    </motion.div>
                </div>
            </LayoutGroup>
        </div>
    );
}