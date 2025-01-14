import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/projects", label: "Projects" },
  { id: 4, path: "/certificates", label: "Certificates" },
  { id: 5, path: "/uses", label: "Uses" },
];

export const hero = {
  image: "/me.jpeg",
  greet: "👋 Hello! I'm Constantin",
  role: "FrontEnd developer",
  location: "Kigali , Rwanda",
  description:
    "I love building tools that are user-friendly, simple and delightful. I was student at coursera learning FrontEnd Development course provided by meta where i have gained different modern skills about FrontEnd development.",
  lookingFor: "I'm currently looking for a new role as developer.",
  hire: "Contact me ?",
};
export const projectImages = [
  {
    src: "/projects/academie.png",
    alt: "Academie dela salle",
    link: "https://academie-indol.vercel.app",
  },
  {
    src: "/projects/approuter.png",
    alt: "Learn NextJs",
    link: "https://app-router-nextjs-iota.vercel.app",
  },
  {
    src: "/projects/google.png",
    alt: "Search Engine",
    link: "https://myengine.vercel.app",
  },
  {
    src: "/projects/todo.png",
    alt: "TODO App",
    link: "https://landingone.vercel.app/todo",
  },
  {
    src: "/projects/travel.png",
    alt: "Travel Landing page",
    link: "https://travel-xi-nine.vercel.app",
  },
  {
    src: "/projects/rathon.png",
    alt: "Rathon",
    link: "https://rathon.vercel.app",
  },
];

export const works = [
  {
    logo: "C",
    Place: "Coursera",
    Role: "Student",
    Date: "2024 - Present",
  },
  {
    logo: "E",
    Place: "Ecole des science Byimana",
    Role: "Student",
    Date: "2021 - 2024",
  },
  {
    logo: "A",
    Place: "Academie dela salle",
    Role: "Student",
    Date: "2018 - 2021",
  },
];
