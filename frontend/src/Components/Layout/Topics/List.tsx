import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { ClaimSubcategory } from "../../../types/topics";
import Heading from "../../UI/Heading";
import Description from "../../UI/Description";

interface ArticleListProps {
  activeLabel: string;
  articles: ClaimSubcategory[];  // Changed from Topic[] to ClaimSubcategory[]
}

export default function List({ activeLabel, articles }: ArticleListProps) {

    const [open, setOpen] = useState<number | null>(null);
    const toggle = (i: number) => setOpen(open === i ? null : i);
  return (
    <div className="flex-1 px-4 py-6 md:px-10 md:py-10">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">{activeLabel}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Find information about filing, tracking and managing your{" "}
        {activeLabel.toLowerCase()}.
      </p>

      <div className="flex flex-col gap-3">
        {articles.map((article, index) => (
          <div key={article.id}>
          <button
            onClick={() => toggle(index)}
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 md:px-5 flex items-center justify-between text-left hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-sm active:bg-gray-50 dark:active:bg-gray-950 transition-all group w-full ${
                open === index ? "bg-gray-50 dark:bg-gray-800 " : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
          >
            <div className="flex-1 min-w-0 pr-3">
              <Heading title={article.title} />
              <Description content={article.description} />
            </div>
            <ChevronRight
                size={16}
                className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                  open === index ? "rotate-90" : ""
                }`}
              />
          </button>
          {article.subLink && article.subLink.length > 0 && open === index && (
            <div className="mx-10 px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl mt-2">
              <Heading title="Related Links" />
              <ul className="list-disc list-inside space-y-1">
                {article.subLink.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
        ))}
      </div>
    </div>
  );
}