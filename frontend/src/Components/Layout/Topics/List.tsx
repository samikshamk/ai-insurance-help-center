import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import type { Article } from "../../../types/topics";

interface ArticleListProps {
  activeLabel: string;
  articles: Article[];
}

export default function List({ activeLabel, articles }: ArticleListProps) {

    const [open, setOpen] = useState<number | null>(null);
  
    const toggle = (i: number) => setOpen(open === i ? null : i);

  // console.log("Rendering List with activeLabel:", activeLabel);
  // console.log("Rendering List with articles:", articles);
  return (
    <div className="flex-1 px-4 py-6 md:px-10 md:py-10">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{activeLabel}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Find information about filing, tracking and managing your{" "}
        {activeLabel.toLowerCase()}.
      </p>

      <div className="flex flex-col gap-3">
        {articles.map((article, index) => (
          <>
          <button
            key={article.id}
            onClick={() => toggle(index)}
            className={`bg-white border border-gray-200 rounded-xl px-4 py-4 md:px-5 flex items-center justify-between text-left hover:border-indigo-200 hover:shadow-sm active:bg-gray-50 transition-all group w-full ${
                open === index ? "bg-gray-50" : "bg-white hover:bg-gray-50"
              }`}
          >
            <div className="flex-1 min-w-0 pr-3">
              <p className="text-sm font-semibold text-gray-900 mb-0.5 group-hover:text-indigo-600 transition-colors">
                {article.title}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {article.description}
              </p>
            </div>
            <ChevronRight
                size={16}
                className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                  open === index ? "rotate-90" : ""
                }`}
              />
          </button>

          {open === index && (
              <div className="px-5 pb-4 bg-gray-50">
                <p className="text-sm text-gray-500 leading-relaxed">{article.description} </p>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}