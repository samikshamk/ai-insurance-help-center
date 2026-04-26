import { useRef } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export default function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
    }
  };

  return (
    <div className="flex items-end gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask me anything about your insurance..."
        rows={1}
        className="flex-1 resize-none text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent leading-relaxed max-h-28"
      />
      <button
        onClick={onSend}
        disabled={disabled || !value.trim()}
        className="w-8 h-8 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
      >
        <Send size={14} className="text-white" />
      </button>
    </div>
  );
}