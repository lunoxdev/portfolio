import { useState } from "react";
import { InputLightEffect } from "@components/inputLightEffect";
import ProjectsGrid from "@components/ProjectsGrid";
import LinkedIn from "@assets/linkedin-icon.svg";
import GitHub from "@assets/github-icon.svg";

export interface Project {
  name: string;
  description: string;
  url: string;
  stacks: string[];
}

const allProjects: Project[] = [
  {
    name: "PEERPLAY GAMES",
    description:
      "Casino startup showcased at ICE Barcelona 2025 attracting investors.",
    url: "https://twinkeys-portal.bluebirdarena.com/",
    stacks: [
      "CSS3",
      "HTML5",
      "Vite",
      "WebSockets",
      "Redux",
      "TailwindCSS",
      "Axios",
      "React",
      "Motion",
      "Node",
      "clsx",
      "Docker",
      "MySQL",
      "DBeaver",
      "TypeScript",
    ],
  },
  {
    name: "CLASSIC CASINO",
    description:
      "Simple traditional casino that mirrors the look and feel of classic gaming platforms",
    url: "https://classic-casino.vercel.app/",
    stacks: [
      "Vercel",
      "Vite",
      "TypeScript",
      "PixiJS V8",
      "TailwindCSS",
      "React",
      "Node",
      "CSS3",
      "HTML5",
    ],
  },
  {
    name: "ANIME STORY AI",
    description:
      "AI-powered interactive anime story generator, letting users create unique stories and characters with real-time prompts.",
    url: "https://anime-story-ai.vercel.app/",
    stacks: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "AI SDK",
      "NanoBanana AI",
      "AI",
      "Vercel",
    ],
  },
  {
    name: "ZELDA SLOT",
    description:
      "A fantasy slot game inspired by Zelda, built with PixiJS V8. It features smooth reel animations, and nostalgic sound effects.",
    url: "https://zelda-slot.vercel.app/",
    stacks: [
      "HTML5",
      "TailwindCSS",
      "PixiJS V8",
      "TypeScript",
      "Howler",
      "GSAP",
      "React",
      "NextJS",
      "Vercel",
    ],
  },
  {
    name: "COLOR GUESS GAME",
    description:
      "An interactive color guessing game built with PixiJS V8, featuring a persistent stage for seamless gameplay.",
    url: "https://color-guess-pixijs-game.vercel.app",
    stacks: [
      "HTML5",
      "TailwindCSS",
      "PixiJS V8",
      "React",
      "Pixi Sound",
      "TypeScript",
      "Zustand",
      "Vite",
      "Vercel",
    ],
  },
  {
    name: "MI CASA DE APUESTA",
    description: "Founder | Affiliate iGaming site targeting Peru market.",
    url: "https://micasadeapuesta.pe/",
    stacks: [
      "Astro",
      "React",
      "CSS3",
      "Typescript",
      "HTML5",
      "TailwindCSS",
      "Vercel",
      "Cloudflare",
      "Bun",
      "MDX",
      "SEO",
    ],
  },
];

export default function Projects() {
  const [stackFilter, setStackFilter] = useState<string>("");

  const filteredProjects = allProjects.filter((project) =>
    stackFilter.trim() === ""
      ? true
      : project.stacks.some((stack) =>
        stack.toLowerCase().includes(stackFilter.toLowerCase())
      )
  );

  const noResults = stackFilter.trim() !== "" && filteredProjects.length === 0;

  return (
    <section className="my-4">
      {/* Search Bar */}
      <div className="flex justify-between items-center">
        <InputLightEffect
          value={stackFilter}
          onChange={(e) => setStackFilter(e.target.value)}
        />

        <div className="flex items-center space-x-2">
          {/* GitHub */}
          <a
            href="https://github.com/lunoxdev"
            target="_blank"
            aria-label="Go to GitHub"
          >
            <img
              src={GitHub.src}
              alt="GitHub"
              className="h-8 w-8 hover:scale-110 transition-transform duration-200"
            />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/moises-obando/"
            target="_blank"
            aria-label="Go to LinkedIn"
          >
            <img
              src={LinkedIn.src}
              alt="LinkedIn"
              className="h-7 w-7 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>

      {/* Projects Grid */}
      <ProjectsGrid projects={filteredProjects} noResults={noResults} />
    </section>
  );
}
