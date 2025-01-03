export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};
export type NavLink = {
  id: number;
  path: string;
  label: string;
};

export type Project = {
  id: number;
  logo: string;
  alt: string;
  title: string;
  hostlink: string;
  githublink: string;
  subtitile: string;
  time: string;
};
