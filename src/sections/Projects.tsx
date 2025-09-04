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
      "PeerPlay Games casino startup showcased at ICE Barcelona 2025 attracting investors.",
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
      "clsx",
      "Docker",
      "MySQL",
      "DBeaver",
      "pnpm",
      "GitLab",
      "TypeScript",
    ],
  },
  {
    name: "MI CASA DE APUESTA",
    description: "Founder - Affiliate iGaming site targeting the LATAM market.",
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
  {
    name: "CLASSIC CASINO",
    description:
      "Classic casino with a traditional UI, offering a simple and familiar gaming experience.",
    url: "https://casino-classic.vercel.app/",
    stacks: [
      "HTML5",
      "CSS3",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "React",
      "Vercel",
      "GitHub",
      "pnpm",
    ],
  },
  {
    name: "NEXT CASINO",
    description:
      "Project to explore Blockchain, AI and PixiJS with latest modern technologies.",
    url: "https://pvpcasino.vercel.app/",
    stacks: [
      "HTML5",
      "CSS3",
      "clsx",
      "Express",
      "PostgreSQL",
      "Socket.io",
      "Axios",
      "TypeScript",
      "Vite",
      "WebSockets",
      "Node",
      "Zustand",
      "TailwindCSS",
      "React",
      "Motion",
      "Botpress",
      "Docker",
      "Supabase",
      "Vercel",
      "GitHub",
      "pnpm",
    ],
  },
  {
    name: "COLOR GUESS GAME",
    description:
      "A PixiJS interactive color guessing game with persistent stage.",
    url: "https://color-guess-pixijs-game.vercel.app",
    stacks: [
      "HTML5",
      "TailwindCSS",
      "Vite",
      "PixiJS",
      "React",
      "TypeScript",
      "Zustand",
      "Vercel",
      "GitHub",
      "pnpm",
    ],
  },
  {
    name: "ETH ADDRESS SCANNER",
    description:
      "Scan any Ethereum address to retrieve real-time blockchain data.",
    url: "https://eth-address-scanner.vercel.app/",
    stacks: [
      "pnpm",
      "Motion",
      "dotenv",
      "Socket.io",
      "Express",
      "Ether.js",
      "Alchemy",
      "TypeScript",
      "Tenderly",
      "Fly.io",
      "Vite",
      "React",
      "Vercel",
      "Cloudflare",
      "TailwindCSS",
      "clsx",
      "GitHub",
      "web3",
      "Docker",
      "Node",
    ],
  },
  {
    name: "MOBILE LEGENDS COUNTERS",
    description:
      "Provides strategic hero counter-picks to help you rank up faster.",
    url: "https://mobile-legends-counters.vercel.app/",
    stacks: [
      "HTML5",
      "CSS3",
      "TypeScript",
      "Astro",
      "TailwindCSS",
      "React",
      "Motion",
      "Vercel",
      "GitHub",
      "pnpm",
    ],
  },
  {
    name: "MINÚSCULAS Y MAYÚSCULAS",
    description:
      "Simple tool to convert text between uppercase and lowercase instantly.",
    url: "https://minusculas-y-mayusculas.vercel.app/",
    stacks: [
      "HTML5",
      "Astro",
      "React",
      "TypeScript",
      "CSS3",
      "TailwindCSS",
      "GitHub",
      "pnpm",
      "JavaScript",
      "Motion",
      "Vercel",
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
