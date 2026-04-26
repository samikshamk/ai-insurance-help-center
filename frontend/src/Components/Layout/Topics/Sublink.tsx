import type { ClaimLink } from "../../../types/topics";

interface RelatedLinksProps {
  title: string;
  links: ClaimLink[];
}

export default function Sublink({ title, links }: RelatedLinksProps) {
  return (
    <div className="hidden lg:block w-72 xl:w-80 px-8 py-10 flex-shrink-0">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 underline underline-offset-2 transition-colors leading-snug"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}