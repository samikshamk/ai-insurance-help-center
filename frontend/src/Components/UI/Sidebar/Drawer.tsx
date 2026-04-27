import { X } from "lucide-react";
import type { Topic } from "../../../types/topics";

interface DrawerProps {
  topics: Topic[];
  activeTopic: string;
  isOpen: boolean;
  onSelect: (id: string) => void;
  onClose: () => void;
}

export default function Drawer({
  topics,
  activeTopic,
  isOpen,
  onSelect,
  onClose,
}: DrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-40 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            All Topics
          </p>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 p-3 overflow-y-auto h-full pb-20">
          {topics.map((topic) => {
            const isActive = topic.id === activeTopic;
            return (
              <button
                key={topic.id}
                onClick={() => onSelect(topic.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm w-full text-left transition-colors ${
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className={isActive ? "text-indigo-500" : "text-gray-400 dark:text-gray-500"}>
                  {topic.icon}
                </span>
                <span className="flex-1">{topic.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}