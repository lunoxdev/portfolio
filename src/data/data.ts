export interface Project {
  id: number;
  name: string;
  img: string;
  url: string;
  description: string;
}

export interface Social {
  id: number;
  nombre: string;
  logo: string;
  url: string;
}

export interface Skill {
  id: number;
  nombre: string;
  logo: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Casino",
    img: "public/img/portfolio/casino.webp",
    url: "https://casino-games-app.netlify.app/",
    description: "A sophisticated casino platform for betting.",
  },
  {
    id: 2,
    name: "Afiliados",
    img: "public/img/portfolio/afiliados.webp",
    url: "https://afiliados.netlify.app/",
    description:
      "An affiliate LATAM website for online sports betting platforms.",
  },
  {
    id: 3,
    name: "Rick & Morty",
    img: "public/img/portfolio/rickandmorty.webp",
    url: "https://rick-morty-adventures.netlify.app/",
    description:
      "Embark on a captivating journey through the universe of this beloved animated series as you explore character profiles seamlessly connected to an API.",
  },
];

const social: Social[] = [
  {
    id: 1,
    nombre: "LinkedIn",
    logo: "public/img/social/linkedin.svg",
    url: "https://www.linkedin.com/in/moises-obando/",
  },
  {
    id: 2,
    nombre: "GitHub",
    logo: "public/img/social/github.svg",
    url: "https://github.com/Lunox-code",
  },
  {
    id: 3,
    nombre: "Instagram",
    logo: "public/img/social/ig.svg",
    url: "https://www.instagram.com/lunox.code/",
  },
];

const skills: Skill[] = [
  {
    id: 1,
    nombre: "React JS",
    logo: "public/img/skills/react-2.svg",
  },
  {
    id: 2,
    nombre: "JavaScript",
    logo: "public/img/skills/javascript.svg",
  },
  {
    id: 3,
    nombre: "HTML 5",
    logo: "public/img/skills/html5.svg",
  },
  {
    id: 4,
    nombre: "CSS 3",
    logo: "public/img/skills/css-3.svg",
  },
  {
    id: 5,
    nombre: "Figma",
    logo: "public/img/skills/figma.svg",
  },
  {
    id: 6,
    nombre: "Tailwind CSS",
    logo: "public/img/skills/tailwind-css.svg",
  },
];

const data = {
  projects,
  social,
  skills,
};

export default data;
