export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    { title: "Dashboard", href: "/" },
    { title: "Schedule", href: "/schedule" },
    { title: "Helpers", href: "/helpers" },
    { title: "Clients", href: "/clients" },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};
