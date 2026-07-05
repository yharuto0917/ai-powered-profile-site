import {
    SiPython,
    SiTypescript,
    SiGo,
    SiC,
    SiReact,
    SiTailwindcss,
    SiPytorch,
    SiTensorflow,
    SiPydantic,
    SiLangchaincorporate,
    SiVercel,
    SiHono,
    SiGithubactions,
    SiDocker,
    SiGooglecloud,
    SiCloudflare,
    SiClaudecode
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { Star, Box } from 'lucide-react';
import React from 'react';

const AntigravityIcon = (props: any) => (
    <img src="/antigravity-icon__one-color.png" alt="Google Antigravity" {...props} className={`${props.className || ''} w-[1em] h-[1em] object-contain opacity-70`} />
);

type Skill = {
    name: string;
    icon: React.ElementType;
    rating: number; // 1-5
};

const languagesAndFrontend: Skill[] = [
    { name: 'Python', icon: SiPython, rating: 5 },
    { name: 'TypeScript', icon: SiTypescript, rating: 5 },
    { name: 'Java', icon: FaJava, rating: 3 },
    { name: 'Go', icon: SiGo, rating: 3 },
    { name: 'C', icon: SiC, rating: 4 },
    { name: 'React', icon: SiReact, rating: 4 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, rating: 4 },
];

const aiFrameworks: Skill[] = [
    { name: 'PyTorch', icon: SiPytorch, rating: 3 },
    { name: 'TensorFlow', icon: SiTensorflow, rating: 2 },
    { name: 'Pydantic AI', icon: SiPydantic, rating: 5 },
    { name: 'LangGraph', icon: SiLangchaincorporate, rating: 3 },
    { name: 'Vercel AI SDK', icon: SiVercel, rating: 4 },
    { name: 'Flue', icon: Box, rating: 2 },
    { name: 'Mastra', icon: Box, rating: 3 },
];

const backendAndCloud: Skill[] = [
    { name: 'Hono.js', icon: SiHono, rating: 4 },
    { name: 'GitHub Actions', icon: SiGithubactions, rating: 4 },
    { name: 'Docker', icon: SiDocker, rating: 4 },
    { name: 'Google Cloud', icon: SiGooglecloud, rating: 3 },
    { name: 'Cloudflare', icon: SiCloudflare, rating: 4 },
    { name: 'Google Antigravity', icon: AntigravityIcon, rating: 5 },
    { name: 'Claude Code', icon: SiClaudecode, rating: 5 },
];

const SkillRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    size={16}
                    className={star <= rating ? "fill-pink-400 text-pink-400" : "text-gray-200"}
                />
            ))}
        </div>
    );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => {
    return (
        <div className="flex flex-col gap-4 bg-white/90 rounded-3xl shadow-lg shadow-pink-100 border border-pink-100 p-6 sm:p-8 w-full">
            <p className="text-pink-300 text-xl sm:text-2xl font-bold">{title}</p>
            <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-5">
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <li key={skill.name} className="flex flex-col">
                                <div className="flex items-center gap-3">
                                    <Icon className="text-gray-600 text-2xl min-w-[24px]" />
                                    <span className="text-gray-600 font-medium text-base sm:text-lg leading-none">{skill.name}</span>
                                </div>
                                <div className="pl-9">
                                    <SkillRating rating={skill.rating} />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default function MySkillsIn() {
    return (
        <div className="flex justify-center mb-14 sm:mb-20 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
                <SkillCategory title="Languages & Frontend" skills={languagesAndFrontend} />
                <SkillCategory title="AI Frameworks" skills={aiFrameworks} />
                <SkillCategory title="Backend & Cloud" skills={backendAndCloud} />
            </div>
        </div>
    );
}
