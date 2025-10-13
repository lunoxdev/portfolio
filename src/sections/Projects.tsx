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
    name: "TREBOLESBET",
    description:
      "My own online casino with original games, supporting crypto payments and user registration.",
    url: "https://trebolesbet.com/",
    stacks: [
      "Vercel",
      "NextJS",
      "TypeScript",
      "Supabase",
      "GSAP",
      "Axios",
      "TailwindCSS",
      "React",
      "HTML5",
    ],
  },
  {
    name: "M&M STORE",
    description:
      "An e-commerce project with features product management, a shopping cart, user authentication, and order confirmation via WhatsApp.",
    url: "https://mai-store.vercel.app/",
    stacks: [
      "Vercel",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "GSAP",
      "clsx",
      "Node",
      "Supabase",
      "PostgreSQL",
      "Google Auth",
      "CSS3",
      "React",
      "HTML5",
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
  {
    name: "CLASSIC CASINO",
    description:
      "Simple casino offering live matches and popular slot games.",
    url: "https://classic-casino.vercel.app/",
    stacks: [
      "Vercel",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "React",
      "Node",
      "CSS3",
      "HTML5",
    ],
  },
  {
    name: "CRYPTO STATS",
    description:
      "Show real-time crypto data from CoinMarketCap and Coingecko with key stats, and visualize it with ApexCharts.",
    url: "https://crypto-stats-ai.vercel.app/",
    stacks: [
      "HTML5",
      "TailwindCSS",
      "Axios",
      "TypeScript",
      "GSAP",
      "Apexcharts",
      "Biome",
      "React",
      "NextJS",
      "Vercel",
    ],
  },
  {
    name: "ETH Address Scanner",
    description:
      "Easily scan any Ethereum address to retrieve real-time blockchain data.",
    url: "https://eth-address-scanner.vercel.app/",
    stacks: [
      "Motion",
      "Socket.io",
      "Express",
      "Ether.js",
      "Alchemy",
      "Tenderly",
      "Fly.io",
      "Vite",
      "React",
      "Vercel",
      "TailwindCSS",
      "clsx",
      "web3",
      "Docker",
      "Node",
    ],
  },
  {
    name: "COLOR GUESS GAME",
    description:
      "An interactive color guessing game built with PixiJS V8, featuring a persistent stage for seamless gameplay.",
    url: "https://color-guess-pixijs-game.vercel.app",
    stacks: [
      "HTML5",
      "React",
      "TailwindCSS",
      "PixiJS V8",
      "WebGL",
      "Pixi Sound",
      "TypeScript",
      "Zustand",
      "Vite",
      "Vercel",
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
    name: "Mobile Legends Counters",
    description:
      "ML counter-pick website to helps players pick smarter and rank up.",
    url: "https://mobile-legends-counters.vercel.app/",
    stacks: [
      "CSS3",
      "HTML5",
      "Astro",
      "React",
      "AWS",
      "Cloudflare",
      "TailwindCSS",
      "JavaScript",
      "GitHub",
      "pnpm",
      "Motion",
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
