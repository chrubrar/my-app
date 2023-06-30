export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",

    },
    {
      title: "InputDemo",
      href: "/inputdemo",
    },
    {
      title: "InputFile",
      href: "/inputfile",
    },
    {
      title: "Form Demo",
      href: "/formdemo",
    },
  ],
  links: {
    sword: "/skeleton",
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
