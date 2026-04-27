import type { Topic } from "../../../types/topics";

interface SidebarProps {
  topics: Topic[];
  activeTopic: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ topics, activeTopic, onSelect }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col w-52 xl:w-56 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 py-6 flex-shrink-0">
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-5 mb-3">
        All Topics
      </p>
      <nav className="flex flex-col gap-0.5">
        {topics.map((topic) => {
          const isActive = topic.id === activeTopic;
          return (
            <button
              key={topic.id}
              onClick={() => onSelect(topic.id)}
              className={`flex items-center gap-3 pl-4 pr-4 py-2.5 text-sm w-full text-left transition-colors border-l-2 ${
                isActive
                  ? "border-l-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "border-l-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <span className={isActive ? "text-indigo-500 dark:text-indigo-400" : "text-gray-400 dark:text-gray-500"}>
                {topic.icon}
              </span>
              {topic.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}