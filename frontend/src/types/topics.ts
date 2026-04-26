export interface ClaimLink {
  id: string;
  label: string;
  href: string;
}

export interface ClaimSubcategory {
  id: string;
  title: string;
  description: string;
  subLink?: ClaimLink[];
}

export interface Topic {
  id: string;
  label: string;
  icon: React.ReactNode;
  subcategories: ClaimSubcategory[];
  relatedTitle: string;
  relatedLinks: ClaimLink[];
}