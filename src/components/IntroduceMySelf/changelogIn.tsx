import { changelogContents } from "./chengelogContents";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

export default function ChangeLogIn() {
    const changelogs = changelogContents;
    return (
        <div className="pt-15 pb-10">
            {changelogs.map((changelog, index) => (
                <a
                    key={changelog.title}
                    href={changelog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-6 group cursor-pointer mb-2"
                >
                    {/* Timeline Column */}
                    <div className="flex flex-col items-center min-w-[60px]">
                        <div className="w-5 h-5 rounded-full bg-pink-400 border-4 border-white ring-2 ring-pink-200 shadow-sm z-10 flex-shrink-0 mt-2.5" />
                        <div className="w-0.5 border-l-2 border-dotted border-gray-300 flex-grow -mt-2 min-h-[100px]"></div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col pb-12 flex-grow">
                        <div className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors duration-300">{changelog.title}</div>

                        <div className="bg-white/90 rounded-3xl border-2 border-dotted border-pink-300 py-8 px-8 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 w-full">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {changelog.tag.map((tag) => (
                                    <span key={tag} className="bg-pink-50 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className="title-font text-xl text-gray-500 mb-2">{changelog.date}</h2>
                            <div className="prose prose-pink max-w-none">
                                <ReactMarkdown>{changelog.contents}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}