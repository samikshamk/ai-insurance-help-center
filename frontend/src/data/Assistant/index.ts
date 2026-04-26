export const suggested_prompt: SuggestedPrompt[] = [
  { id: "p1", label: "How do I file a claim?" },
  { id: "p2", label: "What does my policy cover?" },
  { id: "p3", label: "How to update my payment?" },
  { id: "p4", label: "What is a deductible?" },
  { id: "p5", label: "How to add a beneficiary?" },
];

export const ai_responses: Record<string, string> = {
  default:
    "Thanks for your question! I'm here to help with all your insurance needs. Could you provide a bit more detail so I can give you the most accurate answer?",
  claim:
    "To file a claim, log in to your account and go to Claims > File New Claim. You'll need your policy number, date of incident, and supporting documents. The process typically takes 3–5 business days.",
  cover:
    "Your policy covers hospitalisation, surgical procedures, critical illness, and accidental death. For a full breakdown, visit the Coverage section or I can walk you through specific scenarios.",
  payment:
    "You can update your payment method by going to Account > Billing & Payments > Update Payment. We accept Visa, Mastercard, and GIRO. Changes take effect on your next billing cycle.",
  deductible:
    "A deductible is the amount you pay out-of-pocket before your insurance kicks in. For example, if your deductible is $500 and your claim is $2,000, you pay $500 and we cover the remaining $1,500.",
  beneficiary:
    "To add a beneficiary, go to Account > Profile > Beneficiaries > Add New. You'll need their full name, NRIC/passport, and relationship to you. Changes are reflected immediately.",
};