import { ChevronRight } from "lucide-react";
import type { SearchResult } from "../../types/search";
import { categoryColorMap } from "../../../data/Search/index";

interface ResultCardProps {
  result: SearchResult;
}

export default function Results({ result }: ResultCardProps) {
  return (
    <a
      href={result.href}
      className="flex items-center justify-between gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-4 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-sm transition-all group"
    >
      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 mb-1.5 leading-snug">
          {result.question}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
          {result.description}
        </p>
      </div>

      {/* Badge + chevron */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColorMap[result.categoryColor]}`}>
          {result.category}
        </span>
        <ChevronRight size={15} className="text-gray-400 group-hover:text-indigo-500 transition-colors" />
      </div>
    </a>
  );
}