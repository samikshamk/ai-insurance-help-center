import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: (val: string) => void;
  onClear: () => void;
  onSearch: () => void;
}

export default function SearchBar({ query, onChange, onClear, onSearch }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3.5 py-2.5 gap-2 bg-white dark:bg-gray-800 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 dark:focus-within:ring-indigo-900 transition">
        <Search size={16} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder="Search for answers, topics or ask a question..."
          className="flex-1 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none bg-transparent"
        />
        {query && (
          <button onClick={onClear} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <X size={15} />
          </button>
        )}
      </div>
      <button
        onClick={onSearch}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-300 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
      >
        Search
      </button>
    </div>
  );
}