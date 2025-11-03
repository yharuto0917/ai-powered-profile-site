import { ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', style }) => {
    const baseClasses = `
    p-8
    bg-pink-300/10 opacity-80
    backdrop-blur-xl
    rounded-3xl
    shadow-2xl
    shadow-pink-500/20
    text-black
    `;

    const combinedClasses = `${baseClasses} ${className}`.trim();
    return (
        <div className={combinedClasses} style={style}>
            {children}
        </div>
    );
};

export { GlassCard };