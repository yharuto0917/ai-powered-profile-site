import { changelogContents } from "./chengelogContents";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

export default function ChangeLogIn() {
    const changelogs = changelogContents;
    return (
        <div className="pt-10 sm:pt-12 pb-8 sm:pb-10">
            {changelogs.map((changelog, index) => (
                <div
                    key={changelog.title}
                    onClick={() => window.open(changelog.url, '_blank')}
                    className="flex gap-4 sm:gap-6 group cursor-pointer mb-8 sm:mb-4"
                >
                    {/* Timeline Column */}
                    <div className="flex flex-col items-center min-w-[44px] sm:min-w-[60px]">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-pink-400 border-4 border-white ring-2 ring-pink-200 shadow-sm z-10 flex-shrink-0 mt-2" />
                        <div className="w-0.5 border-l-2 border-dotted border-gray-300 flex-grow -mt-1 sm:-mt-2 min-h-[60px] sm:min-h-[100px]"></div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col pb-10 sm:pb-12 flex-grow">
                        <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-pink-400 transition-colors duration-300">{changelog.title}</div>

                        <div 
                            data-scroll-center={index === 0 ? "true" : undefined}
                            className="bg-white/90 rounded-3xl border-2 border-dotted border-pink-300 p-6 sm:p-7 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 w-full"
                        >
                            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                                {changelog.tag.map((tag) => (
                                    <span key={tag} className="bg-pink-50 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className="title-font text-base sm:text-lg md:text-xl text-gray-500 mb-2">{changelog.date}</h2>
                            <div className="prose prose-pink max-w-none text-sm sm:text-base">
                                <ReactMarkdown
                                    components={{
                                        a: ({ node, ...props }) => (
                                            <a {...props} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" />
                                        )
                                    }}
                                >
                                    {changelog.contents}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
