import {
  Car,
  Shield,
  Plane,
  CreditCard,
  ShieldCheck,
  User,
  Info,
} from "lucide-react";
import type { Topic } from "../../types/topics";

export const topics: Topic[] = [
  {
    id: "claims",
    label: "Claims",
    icon: <Car size={18} />,
    subcategories: [
      {
        id: "cs1",
        title: "CareShield and ElderShield",
        description:
          "Includes claims when the life assured requires assistance with Activities of Daily Living.",
        subLink: {
          id: "sl1",
          label: "Make a CareShield or ElderShield claim",
          href: "https://www.greateasternlife.com/sg/en/customer-services/claims/careshield-eldershield/make-a-careshield-eldershield-claim.html",
        }
      },
      {
        id: "cs2",
        title: "Critical Illness",
        description:
          "Includes claims for major critical, child- and female-related diseases.",
      },
      {
        id: "cs3",
        title: "Death",
        description: "Includes claims when a loved one passes on.",
      },
      {
        id: "cs4",
        title: "Disability",
        description: "Includes claims for total and permanent disability.",
      },
      {
        id: "cs5",
        title: "Hospital & Surgical",
        description:
          "Includes claims for hospitalisation and surgical procedures.",
      },
    ],
    relatedTitle: "Maid and foreign workers",
    relatedLinks: [
      {
        id: "rl1",
        label: "Make an injury, hospitalisation, or death claim",
        href: "#",
      },
      { id: "rl2", label: "Domestic maid claim form", href: "#" },
      {
        id: "rl3",
        label: "Foreign worker hospital and surgical claim form",
        href: "#",
      },
    ],
  },
  {
    id: "policies",
    label: "Policies",
    icon: <Shield size={18} />,
    subcategories: [
      {
        id: "ps1",
        title: "Policy Renewal",
        description: "Renew your insurance policy before it expires.",
      },
      {
        id: "ps2",
        title: "Policy Changes",
        description: "Update your coverage, address, or personal details.",
      },
      {
        id: "ps3",
        title: "Policy Cancellation",
        description: "Cancel your policy and learn about refund eligibility.",
      },
      {
        id: "ps4",
        title: "Beneficiary Updates",
        description: "Add or change beneficiaries on your policy.",
      },
    ],
    relatedTitle: "Policy documents",
    relatedLinks: [
      { id: "pl1", label: "Download your policy document", href: "#" },
      { id: "pl2", label: "Request a policy statement", href: "#" },
      { id: "pl3", label: "View your coverage summary", href: "#" },
    ],
  },
  {
    id: "travel-insurance",
    label: "Travel Insurance",
    icon: <Plane size={18} />,
    subcategories: [
      {
        id: "ts1",
        title: "Trip Cancellation",
        description:
          "Covers costs when your trip is cancelled due to unforeseen events.",
      },
      {
        id: "ts2",
        title: "Medical Emergencies",
        description:
          "Covers overseas medical treatment and emergency evacuation.",
      },
      {
        id: "ts3",
        title: "Baggage Loss",
        description:
          "Covers lost, stolen, or damaged baggage during your trip.",
      },
      {
        id: "ts4",
        title: "Flight Delays",
        description: "Covers expenses caused by significant flight delays.",
      },
    ],
    relatedTitle: "Travel resources",
    relatedLinks: [
      { id: "tl1", label: "File a travel insurance claim", href: "#" },
      { id: "tl2", label: "Emergency assistance hotline", href: "#" },
      { id: "tl3", label: "Travel advisory updates", href: "#" },
    ],
  },
  {
    id: "billing-payments",
    label: "Billing & Payments",
    icon: <CreditCard size={18} />,
    subcategories: [
      {
        id: "bs1",
        title: "Premium Payments",
        description: "Pay your insurance premiums online or via GIRO.",
      },
      {
        id: "bs2",
        title: "Payment Methods",
        description:
          "Add, update, or remove payment methods from your account.",
      },
      {
        id: "bs3",
        title: "Invoice & Receipts",
        description: "View and download your invoices and payment receipts.",
      },
      {
        id: "bs4",
        title: "Refunds",
        description: "Request a refund for overpayments or cancelled policies.",
      },
    ],
    relatedTitle: "Payment forms",
    relatedLinks: [
      { id: "bl1", label: "Set up GIRO payment", href: "#" },
      { id: "bl2", label: "Update credit card details", href: "#" },
      { id: "bl3", label: "Download payment receipt", href: "#" },
    ],
  },
  {
    id: "coverage",
    label: "Coverage",
    icon: <ShieldCheck size={18} />,
    subcategories: [
      {
        id: "cvs1",
        title: "Life Coverage",
        description: "Protect your family with life insurance coverage.",
      },
      {
        id: "cvs2",
        title: "Health Coverage",
        description: "Covers medical expenses from illness or injury.",
      },
      {
        id: "cvs3",
        title: "Motor Coverage",
        description:
          "Covers your vehicle against accidents, theft, and damage.",
      },
      {
        id: "cvs4",
        title: "Home Coverage",
        description: "Protects your home and its contents.",
      },
    ],
    relatedTitle: "Coverage guides",
    relatedLinks: [
      { id: "cvl1", label: "Compare coverage plans", href: "#" },
      { id: "cvl2", label: "Get a coverage quote", href: "#" },
      { id: "cvl3", label: "Upgrade your coverage", href: "#" },
    ],
  },
  {
    id: "account-profile",
    label: "Account & Profile",
    icon: <User size={18} />,
    subcategories: [
      {
        id: "as1",
        title: "Personal Details",
        description: "Update your name, address, and contact information.",
      },
      {
        id: "as2",
        title: "Login & Security",
        description: "Manage your password, 2FA, and login preferences.",
      },
      {
        id: "as3",
        title: "Notifications",
        description: "Control email, SMS, and push notification settings.",
      },
      {
        id: "as4",
        title: "Linked Accounts",
        description: "Manage connected third-party accounts and services.",
      },
    ],
    relatedTitle: "Account forms",
    relatedLinks: [
      { id: "al1", label: "Reset your password", href: "#" },
      { id: "al2", label: "Update personal information form", href: "#" },
      { id: "al3", label: "Download account statement", href: "#" },
    ],
  },
  {
    id: "general",
    label: "General Information",
    icon: <Info size={18} />,
    subcategories: [
      {
        id: "gs1",
        title: "Insurance Basics",
        description: "Learn the fundamentals of insurance and how it works.",
      },
      {
        id: "gs2",
        title: "Glossary of Terms",
        description: "Definitions for common insurance terminology.",
      },
      {
        id: "gs3",
        title: "Regulatory Information",
        description:
          "Learn about the regulatory framework governing your policy.",
      },
      {
        id: "gs4",
        title: "Contact & Support",
        description: "Find the right channel to get help with your queries.",
      },
    ],
    relatedTitle: "Useful resources",
    relatedLinks: [
      { id: "gl1", label: "Insurance glossary PDF", href: "#" },
      { id: "gl2", label: "Regulatory guidelines", href: "#" },
      { id: "gl3", label: "Contact our support team", href: "#" },
    ],
  },
];
