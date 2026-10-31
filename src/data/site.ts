// Everything the page shows lives here, so content can change without touching the layout.

type Project = {
  name: string;
  description: string;
  // Leave href out while a project isn't public yet: it renders with a "Soon" label.
  href?: string;
};

export const site = {
  name: "Jorge Carser",
  role: "Software Developer",
  description:
    "Jorge Carser, software developer building products end to end.",
  bio: "I build software end to end, from backend systems to the interfaces people use. Lately I'm turning what I've learned into open source.",
};

export const projects: Project[] = [
  {
    name: "UI Components",
    description: "A collection of polished, copy-paste components for React.",
    href: "https://github.com/jocarser",
  },
  {
    name: "ledger",
    description: "A double-entry ledger library for balances and transactions.",
  },
];

// Links with an empty href are hidden.
export const links = [
  { label: "X", href: "https://x.com/jocarser" },
  { label: "GitHub", href: "https://github.com/jocarser" },
  { label: "LinkedIn", href: "" },
  { label: "Email", href: "" },
  { label: "CV", href: "" },
].filter((link) => link.href);
