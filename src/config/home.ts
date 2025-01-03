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
