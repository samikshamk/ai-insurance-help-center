import type { SearchResult } from "../../types/search";

export const allSearchResults: SearchResult[] = [
  {
    id: "s1",
    question: "What does deductible mean in my policy?",
    description: "Deductible is the amount you pay out-of-pocket before we start paying for a covered claim. You can choose your preferred deductible amount when purchasing a policy.",
    category: "Policies",
    categoryColor: "emerald",
    href: "#",
  },
  {
    id: "s2",
    question: "How does deductible affect my premium?",
    description: "Generally, the higher your deductible, the lower your premium. Choosing a lower deductible means a higher premium.",
    category: "Policies",
    categoryColor: "emerald",
    href: "#",
  },
  {
    id: "s3",
    question: "Types of deductibles",
    description: "We offer different types of deductibles including compulsory excess, voluntary excess and windscreen excess.",
    category: "Coverage",
    categoryColor: "amber",
    href: "#",
  },
  {
    id: "s4",
    question: "Can I change my deductible after purchasing a policy?",
    description: "In most cases, you can adjust your deductible at renewal. Contact us to explore your options.",
    category: "Policies",
    categoryColor: "emerald",
    href: "#",
  },
  {
    id: "s5",
    question: "How do I file a claim with a deductible?",
    description: "When filing a claim, you pay the deductible amount first and we cover the remaining eligible expenses.",
    category: "Claims",
    categoryColor: "indigo",
    href: "#",
  },
  {
    id: "s6",
    question: "What is a zero-deductible policy?",
    description: "A zero-deductible policy means you pay nothing out-of-pocket when making a claim. Premiums are typically higher.",
    category: "Coverage",
    categoryColor: "amber",
    href: "#",
  },
  {
    id: "s7",
    question: "Does deductible apply to all claims?",
    description: "Deductibles may not apply to all claim types. Some policies waive the deductible for specific situations like total loss.",
    category: "Claims",
    categoryColor: "indigo",
    href: "#",
  },
  {
    id: "s8",
    question: "What happens if my claim is less than my deductible?",
    description: "If your claim amount is less than your deductible, you will bear the full cost and no insurance payout will be made.",
    category: "Claims",
    categoryColor: "indigo",
    href: "#",
  },
];

export const categoryColorMap: Record<string, string> = {
  indigo: "bg-indigo-50 text-indigo-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  rose: "bg-rose-50 text-rose-600",
  violet: "bg-violet-50 text-violet-600",
};