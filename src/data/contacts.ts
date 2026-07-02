// ─── Types ───────────────────────────────────────────────────────────────────

export type ContactLink = {
  icon: string;
  label: string;
  value: string;
  href: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const contactLinks: ContactLink[] = [
  {
    icon: "✉️",
    label: "Email",
    value: "fian@example.com",
    href: "mailto:fian@example.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/fiandev",
    href: "https://linkedin.com/in/fiandev",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/fiandev",
    href: "https://github.com/fiandev",
  },
];
