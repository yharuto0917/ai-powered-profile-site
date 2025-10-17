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
    { label: 'GitHub', link: 'https://github.com/yourusername' },
    { label: 'Hugging Face', link: 'https://www.linkedin.com/in/yourusername' },
    { label: 'Twitter(X)', link: 'https://twitter.com/yourusername' },
    { label: 'Instagram', link: 'https://www.instagram.com/yourusername' },
    { label: 'Threads', link: 'https://www.facebook.com/yourusername' },
];

export default function HeaderMenu() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
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
                logoUrl="/next.svg"
                accentColor="#ff6b6b"
                onMenuOpen={() => {}}
                onMenuClose={() => {}}
            />
        </div>
    );
}
