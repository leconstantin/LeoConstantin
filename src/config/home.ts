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
export const images = [
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75",
    alt: "",
  },
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75",
    alt: "",
  },
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=384&q=75",
    alt: "",
  },
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75",
    alt: "",
  },
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=384&q=75",
    alt: "",
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
