export interface SearchResult {
  id: string;
  question: string;
  description: string;
  category: string;
  categoryColor: string;
  href: string;
}

export interface SearchFilters {
  category: string;
}