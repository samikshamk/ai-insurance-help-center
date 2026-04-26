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
        className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 font-medium bg-white hover:border-indigo-400 hover:text-indigo-600 transition-colors"
      >
        Filters
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-20 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 w-44">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
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