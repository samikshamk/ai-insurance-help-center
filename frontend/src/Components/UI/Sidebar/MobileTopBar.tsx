import { Menu, ChevronDown } from "lucide-react";
import type { Topic } from "../../../types/topics";

interface MobileTopBarProps {
  activeTopic: Topic | undefined;
  onOpenDrawer: () => void;
}

export default function MobileTopBar({ activeTopic, onOpenDrawer }: MobileTopBarProps) {
  return (
    <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
      <button
        onClick={onOpenDrawer}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 active:opacity-70"
      >
        <Menu size={18} className="text-gray-500" />
        <span>All Topics</span>
      </button>

      <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1.5 rounded-full">
        <span className="text-indigo-500">{activeTopic?.icon}</span>
        <span>{activeTopic?.label}</span>
        <ChevronDown size={13} />
      </div>
    </div>
  );
}