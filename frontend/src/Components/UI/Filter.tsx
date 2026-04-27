import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface FiltersDropdownProps {
  selected: string;
  options: string[];
  onChange: (val: string) => void;
}

export default function Filters({ selected, options, onChange }: FiltersDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-medium bg-white dark:bg-gray-800 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        Filters
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1.5 w-44">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400 ${selected === opt ? "text-indigo-600 dark:text-indigo-400 font-medium" : "text-gray-700 dark:text-gray-300"}`}
            >
              {opt}
              {selected === opt && <Check size={13} className="text-indigo-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}