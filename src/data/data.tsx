import casinoImg from "../assets/portfolio/casino.webp";
import afiliadosImg from "../assets/portfolio/afiliados.webp";
import minusculasymayusculasImg from "../assets/portfolio/minusculasymayusculas.webp";
import rickandmortyImg from "../assets/portfolio/rickandmorty.webp";
import mobilelegends from "../assets/portfolio/mobile-legends.webp";

import reactJsLogo from "../assets/skills/react-2.svg";
import javascriptLogo from "../assets/skills/javascript.svg";
import html5Logo from "../assets/skills/html5.svg";
import css3Logo from "../assets/skills/css-3.svg";
import figmaLogo from "../assets/skills/figma.svg";
import tailwindCssLogo from "../assets/skills/tailwind-css.svg";

export interface Project {
  id: number;
  name: string;
  btnname: String;
  img: ImageMetadata;
  url: string;
  description: string;
}

export interface Skill {
  id: number;
  nombre: string;
  logo: ImageMetadata;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Casino",
    img: casinoImg,
    btnname: "Casino",
    url: "https://casino-games-app.netlify.app/",
    description: "A sophisticated casino platform for wagering on mock games.",
  },
  {
    id: 2,
    name: "Affiliate landing page",
    btnname: "Affiliate landing page",
    img: afiliadosImg,
    url: "https://afiliados.netlify.app/",
    description:
      "An affiliate LATAM website for online sports betting platforms.",
  },
  {
    id: 3,
    name: "Mobile Legends Counter",
    btnname: "Mobile Legends Counter",
    img: mobilelegends,
    url: "https://mobilelegendscounter.com/",
    description:
      "A website where players can learn how to counter their opponents’ heroes in Mobile Legends, an online strategy game for mobile devices played in teams of five players | LATINO PAGE",
  },
  {
    id: 4,
    name: "Lowercase to uppercase online converter",
    btnname: "Lowercase to uppercase",
    img: minusculasymayusculasImg,
    url: "https://minusculasymayusculas.com/",
    description:
      "Simple and effective web application that allows users to convert text between uppercase and lowercase letters quickly and conveniently in just a few seconds.",
  },
  {
    id: 5,
    name: "Rick & Morty",
    btnname: "Rick & Morty",
    img: rickandmortyImg,
    url: "https://rick-morty-adventures.netlify.app/",
    description:
      "Embark on a captivating journey through the universe of this beloved animated series as you explore character profiles seamlessly connected to an API.",
  },
];

const skills: Skill[] = [
  {
    id: 1,
    nombre: "React JS",
    logo: reactJsLogo,
  },
  {
    id: 2,
    nombre: "JavaScript",
    logo: javascriptLogo,
  },
  {
    id: 3,
    nombre: "HTML 5",
    logo: html5Logo,
  },
  {
    id: 4,
    nombre: "CSS 3",
    logo: css3Logo,
  },
  {
    id: 5,
    nombre: "Figma",
    logo: figmaLogo,
  },
  {
    id: 6,
    nombre: "Tailwind CSS",
    logo: tailwindCssLogo,
  },
];

const data = {
  projects,
  skills,
};

export default data;
