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
                    className="flex flex-col justify-center items-left group cursor-pointer"
                >
                    <div className="flex justify-center items-left gap-5 ml-31">
                        <div className="w-10 h-10 rounded-full bg-pink-100" />
                        <div className="text-2xl font-bold ml-5 group-hover:text-pink-400 transition-colors duration-300">{changelog.title}</div>
                    </div>
                    <div className="flex justify-center items-left">
                        <div className="border-l-4 border-dotted border-gray-400 mx-10"></div>
                        <div className="bg-white/90 rounded-3xl border-2 border-dotted border-pink-300 py-10 px-8 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {changelog.tag.map((tag) => (
                                    <span key={tag} className="bg-pink-50 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className="title-font text-2xl mb-2">{changelog.date}</h2>
                            <ReactMarkdown>{changelog.contents}</ReactMarkdown>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}