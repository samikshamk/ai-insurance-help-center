import { useState, useRef, useEffect } from "react";
import ChatBubble from "../components/Layout/Assistant/ChatBubble";
import ChatInput from "../components/Layout/Assistant/ChatInput";
import { sendChatMessage } from "../components/Layout/Assistant/ChatApi";
import SuggestedPrompts from "../components/UI/Chat/SuggestedPrompts";
import TypingIndicator from "../components/UI/Chat/TypingIndicator";
import type { Message } from "../types/assistant";
import { suggested_prompt, ai_responses } from "../data/Assistant";
import Heading from "../components/UI/Heading";
import Description from "../components/UI/Description";
import Avatar from "../components/UI/Avatar";

function getAIResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("claim")) return ai_responses.claim;
  if (lower.includes("cover")) return ai_responses.cover;
  if (lower.includes("payment") || lower.includes("billing")) return ai_responses.payment;
  if (lower.includes("deductible")) return ai_responses.deductible;
  if (lower.includes("beneficiary")) return ai_responses.beneficiary;
  return ai_responses.default;
}

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm your InsureCare AI Assistant. I can help you with claims, policy questions, billing, and more. What can I help you with today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasMessages = messages.length > 1;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string = input) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

        try {
      const reply = await sendChatMessage(trimmed);
      setMessages(p => [...p, { id: crypto.randomUUID(), role: "assistant", content: reply, timestamp: new Date() }]);
    } catch (err) {
      console.log("Unable to reach the server. Please check your connection and try again.");
    } finally {
      setIsTyping(false);
    }

    // setTimeout(() => {
    //   const aiMsg: Message = {
    //     id: crypto.randomUUID(),
    //     role: "assistant",
    //     content: getAIResponse(trimmed),
    //     timestamp: new Date(),
    //   };
    //   setMessages((prev) => [...prev, aiMsg]);
    //   setIsTyping(false);
    // }, 1200);
  };

  return (
    <div className="mx-auto mt-5 flex flex-col  h-[85vh] w-[100vw] bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3 flex-shrink-0">
        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
          <Avatar />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">InsureCare Assistant</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <p className="text-xs text-gray-500 dark:text-gray-400">Online · Typically replies instantly</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">

          {/* Empty state with suggested prompts */}
          {!hasMessages && (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-950 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Avatar />
              </div>
              <Heading title="How can I help you today?"/>
              <Description content="Ask me anything about your insurance" />
              <SuggestedPrompts prompts={suggested_prompt} onSelect={sendMessage} />
            </div>
          )}

          {/* Messages */}
          {messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg} />
          ))}

          {/* Typing indicator */}
          {isTyping && <TypingIndicator />}

          {/* Suggested prompts after first message */}
          {hasMessages && !isTyping && (
            <div className="mt-2">
              <SuggestedPrompts prompts={suggested_prompt} onSelect={sendMessage} />
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="flex-shrink-0 px-4 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto">
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={() => sendMessage()}
            disabled={isTyping}
          />
          <Description content="AI responses are for guidance only. For complex matters, please contact our team." style="text-center" />
        </div>
      </div>

    </div>
  );
}