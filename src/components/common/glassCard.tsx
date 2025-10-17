import { ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', style }) => {
    const baseClasses = `
    p-8
    bg-white/10
    backdrop-blur-md
    rounded-2xl
    border border-white/20
    shadow-lg
    text-white
    opacity-80
    `;

    const combinedClasses = `${baseClasses} ${className}`.trim();
    return (
        <div className={combinedClasses} style={style}>
            {children}
        </div>
    );
};

export { GlassCard };