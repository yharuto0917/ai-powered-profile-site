'use client';
import StaggeredMenu from '@/components/ui/StaggeredMenu';

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
        <StaggeredMenu
            position="right" isFixed={true}
            items={menuItems} socialItems={socialItems}
            displaySocials={true} displayItemNumbering={true}
            menuButtonColor="#f6a1df" openMenuButtonColor="#f6a1df"
            changeMenuColorOnOpen={true} colors={['#d49cc7', '#fd90f1']}
            logoUrl="/yharutoIconLong.svg" accentColor="#ff6b6b"
            onMenuOpen={() => { }} onMenuClose={() => { }}
        />
    );
}