import type { ClaimSubcategory } from "../../../types/topics";

interface SubcategoryListProps {
  activeLabel: string;
  subcategories: ClaimSubcategory[];
}

export default function SubList({ activeLabel, subcategories }: SubcategoryListProps) {
  return (
    <div className="flex-1 px-6 py-8 md:px-10 md:py-10 border-r border-gray-200 dark:border-gray-700 min-w-0">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">{activeLabel}</h1>

      <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
        {subcategories.map((sub) => (
          <div key={sub.id} className="py-5 group cursor-pointer">
            <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {sub.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{sub.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}