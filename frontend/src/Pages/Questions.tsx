import { useState, useMemo } from "react";
import SearchBar from "../components/UI/SearchBar";
import ResultCard from "../components/Layout/Questions/Results";
import FiltersDropdown from "../components/UI/Filter";
import { allSearchResults } from "../data/Search/index";

const PAGE_SIZE = 3;
const ALL_CATEGORIES = ["All", "Claims", "Policies", "Coverage"];

export default function SearchPage() {
  const [query, setQuery] = useState<string>("deductible");
  const [submittedQuery, setSubmittedQuery] = useState<string>("deductible");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  const handleSearch = () => {
    setSubmittedQuery(query);
    setVisibleCount(PAGE_SIZE);
    setSelectedCategory("All");
  };

  const handleClear = () => {
    setQuery("");
    setSubmittedQuery("");
    setVisibleCount(PAGE_SIZE);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  // Filter results
  const filtered = useMemo(() => {
    return allSearchResults.filter((r) => {
      const matchesQuery =
        !submittedQuery ||
        r.question.toLowerCase().includes(submittedQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(submittedQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || r.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [submittedQuery, selectedCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* Search bar */}
        <SearchBar
          query={query}
          onChange={setQuery}
          onClear={handleClear}
          onSearch={handleSearch}
        />

        {/* Results meta row */}
        {submittedQuery && (
          <div className="flex items-center justify-between mt-5 mb-4">
            <p className="text-sm text-gray-500">
              About{" "}
              <span className="font-medium text-gray-700">{filtered.length}</span>{" "}
              results for{" "}
              <span className="font-medium text-gray-700">"{submittedQuery}"</span>
            </p>
            <FiltersDropdown
              selected={selectedCategory}
              options={ALL_CATEGORIES}
              onChange={handleCategoryChange}
            />
          </div>
        )}

        {/* Result cards */}
        <div className="flex flex-col gap-3">
          {visible.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && submittedQuery && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">No results found for "{submittedQuery}"</p>
            <p className="text-gray-400 text-xs mt-1">Try a different keyword or browse topics.</p>
          </div>
        )}

        {/* Show more */}
        {hasMore && (
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="w-full mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center justify-center gap-1.5 transition-colors"
          >
            Show more results →
          </button>
        )}

      </div>
    </div>
  );
}