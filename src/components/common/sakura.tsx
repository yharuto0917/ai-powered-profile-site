"use client";
import { useState, useEffect } from "react";

interface Petal {
    id: number;
    style: React.CSSProperties;
}
  
// 桜の花びらのUIコンポーネント
const SakuraPetal: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
return <div className="absolute rounded-full bg-pink-200" style={style}></div>;
};

// 桜の背景エフェクトを管理するコンポーネント
const SakuraBackground = () => {
    const [petals, setPetals] = useState<Petal[]>([]);  
    const PETAL_COUNT = 60; // 花びらの数

    useEffect(() => {
        const newPetals = Array.from({ length: PETAL_COUNT }).map((_, i) => {
        const size = Math.random() * 15 + 5;
        const duration = Math.random() * 15 + 8;
        const delay = Math.random() * 15;
        const initialX = Math.random() * 100;
        const sway = Math.random() * 200 - 100;
        const rotation = Math.random() * 360;

        return {
            id: i,
            style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${initialX}vw`,
            top: `-${size * 2}px`,
            animation: `fall ${duration}s linear ${delay}s infinite`,
            filter: 'blur(1.5px)',
            '--sway': `${sway}px`,
            '--rotation': `${rotation}deg`,
            } as React.CSSProperties,
        };
        });
        setPetals(newPetals);
    }, []);

    return (
        <>
            <style>
                {`
                @keyframes fall {
                    0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                    opacity: 1;
                    }
                    100% {
                    transform: translateY(100vh) translateX(var(--sway)) rotate(var(--rotation));
                    opacity: 0;
                    }
                }
                `}
            </style>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
                {petals.map(petal => (
                <SakuraPetal key={petal.id} style={petal.style} />
                ))}
            </div>
        </>
    );
};

export default SakuraBackground;