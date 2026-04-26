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
      <div className="flex items-center flex-1 border border-gray-300 rounded-lg px-3.5 py-2.5 gap-2 bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition">
        <Search size={16} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder="Search for answers, topics or ask a question..."
          className="flex-1 text-sm text-gray-700 outline-none placeholder:text-gray-400 bg-transparent"
        />
        {query && (
          <button onClick={onClear} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={15} />
          </button>
        )}
      </div>
      <button
        onClick={onSearch}
        className="bg-white border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
      >
        Search
      </button>
    </div>
  );
}