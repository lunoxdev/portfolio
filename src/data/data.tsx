import casinoImg from "../assets/portfolio/casino.webp";
import afiliadosImg from "../assets/portfolio/afiliados.webp";
import minusculasymayusculasImg from "../assets/portfolio/minusculasymayusculas.webp";
import rickandmortyImg from "../assets/portfolio/rickandmorty.webp";
import mobilelegends from "../assets/portfolio/mobile-legends.webp";

import astro from "../assets/skills/astro.svg";
import react from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import typescript from "../assets/skills/typescript.svg";
import html from "../assets/skills/html5.svg";
// import figmaLogo from "../assets/skills/figma.svg";
// import tailwindCssLogo from "../assets/skills/tailwind-css.svg";

export interface Project {
  id: number;
  name: string;
  btnname: string;
  img: ImageMetadata;
  url: string;
  description: string;
  skills: { logo: ImageMetadata; logoname: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Casino",
    img: casinoImg,
    btnname: "Casino",
    url: "https://casino-games-app.netlify.app/",
    description: "A sophisticated casino platform for wagering on mock games.",
    skills: [
      { logo: react, logoname: "React JS" },
      { logo: tailwind, logoname: "Tailwind CSS" },
      { logo: html, logoname: "HTML 5" },
    ],
  },
  {
    id: 2,
    name: "Affiliate landing page",
    btnname: "Affiliate",
    img: afiliadosImg,
    url: "https://afiliados.netlify.app/",
    description:
      "An affiliate LATAM website for online sports betting platforms.",
    skills: [
      { logo: react, logoname: "React JS" },
      { logo: tailwind, logoname: "Tailwind CSS" },
      { logo: html, logoname: "HTML 5" },
    ],
  },
  {
    id: 3,
    name: "Mobile Legends Counter",
    btnname: "ML Counter",
    img: mobilelegends,
    url: "https://mobilelegendscounter.com/",
    description:
      "A website where players can learn how to counter their opponents’ heroes in Mobile Legends.",
    skills: [
      { logo: react, logoname: "React JS" },
      { logo: astro, logoname: "Astro" },
      { logo: tailwind, logoname: "Tailwind CSS" },
      { logo: typescript, logoname: "TypeScript" },
      { logo: html, logoname: "HTML 5" },
    ],
  },
  {
    id: 4,
    name: "Lowercase to uppercase online converter",
    btnname: "Converter",
    img: minusculasymayusculasImg,
    url: "https://minusculasymayusculas.com/",
    description:
      "Simple website that allows users to convert quickly text between uppercase and lowercase letters and more.",
    skills: [
      { logo: react, logoname: "React JS" },
      { logo: astro, logoname: "Astro" },
      { logo: tailwind, logoname: "Tailwind CSS" },
      { logo: typescript, logoname: "TypeScript" },
      { logo: html, logoname: "HTML 5" },
    ],
  },
  {
    id: 5,
    name: "Rick & Morty",
    btnname: "Rick & Morty",
    img: rickandmortyImg,
    url: "https://rick-morty-adventures.netlify.app/",
    description:
      "Embark on a captivating journey through the universe of this beloved animated series as you explore character profiles connected to an API.",
    skills: [
      { logo: react, logoname: "React JS" },
      { logo: tailwind, logoname: "Tailwind CSS" },
      { logo: html, logoname: "HTML 5" },
    ],
  },
];

const data = {
  projects,
};

export default data;
