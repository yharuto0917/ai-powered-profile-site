import { changelogContents } from "./chengelogContents";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

export default function ChangeLogIn() {
    const changelogs = changelogContents;
    return (
        <div>
            {changelogs.map((changelog, index) => (
                <div key={changelog.title} className="flex justify-center items-left">
                    <div className="border-l-4 border-dotted border-gray-400 mx-10"></div>
                    <div className="bg-white/90 rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-100 py-10 px-8">
                        <h2>{changelog.date}</h2>
                        <h1>{changelog.title}</h1>
                        <div>{changelog.contents}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}