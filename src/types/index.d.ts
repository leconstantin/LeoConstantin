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
  id: number,
  path: string,
  label: string
}
