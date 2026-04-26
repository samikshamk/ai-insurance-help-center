import type { SuggestedPrompt } from "../../types/assistant";

interface SuggestedPromptsProps {
  prompts: SuggestedPrompt[];
  onSelect: (label: string) => void;
}

export default function SuggestedPrompts({ prompts, onSelect }: SuggestedPromptsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {prompts.map((p) => (
        <button
          key={p.id}
          onClick={() => onSelect(p.label)}
          className="text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 px-3 py-1.5 rounded-full transition-colors"
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}