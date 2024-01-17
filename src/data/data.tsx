import casinoImg from "../assets/portfolio/casino.webp";
import minusculasymayusculasImg from "../assets/portfolio/minusculas-y-mayusculas.webp";
import micasadeapuesta from "../assets/portfolio/mi-casa-de-apuesta.webp";
import mobilelegends from "../assets/portfolio/mobile-legends-counter.webp";

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
    name: "Mi Casa de Apuesta",
    img: micasadeapuesta,
    btnname: "Mi Casa de Apuesta",
    url: "https://lunoxtest.netlify.app/",
    description: "iGaming Latam Affiliate Site",
    skills: [
      { logo: astro, logoname: "Astro" },
      { logo: react, logoname: "React JS" },
      { logo: typescript, logoname: "TypeScript" },
      { logo: tailwind, logoname: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
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
    id: 3,
    name: "Fake Casino",
    img: casinoImg,
    btnname: "Fake Casino",
    url: "https://casino-games-app.netlify.app/",
    description: "A sophisticated Fake Casino platform.",
    skills: [
      { logo: react, logoname: "React JS" },
      { logo: tailwind, logoname: "Tailwind CSS" },
      { logo: html, logoname: "HTML 5" },
    ],
  },
  {
    id: 4,
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
];

const data = {
  projects,
};

export default data;
