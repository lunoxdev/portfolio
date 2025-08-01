import { useState } from "react";
import { InputLightEffect } from "@components/inputLightEffect";
import ProjectsGrid from "@components/ProjectsGrid";
import LinkedIn from "@assets/linkedin-icon.svg";
import GitHub from "@assets/github-icon.svg";

const allProjects = [
  {
    name: "PeerPlay Games",
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
      "Figma",
      "Trello",
      "GitLab",
    ],
  },
  {
    name: "Mi Casa de Apuesta",
    description: "Founder - Affiliate iGaming site targeting the LATAM market.",
    url: "https://micasadeapuesta.pe/",
    stacks: [
      "Astro",
      "React",
      "Cloudflare",
      "CSS3",
      "HTML5",
      "TailwindCSS",
      "Vercel",
      "Supabase",
      "Bun",
      "Typescript",
      "MDX",
    ],
  },
  {
    name: "ETH Address Scanner",
    description:
      "Easily scan any Ethereum address to retrieve real-time blockchain data.",
    url: "https://eth-address-scanner.vercel.app/",
    stacks: [
      "pnpm",
      "Motion",
      "dotenv",
      "Socket.io",
      "Express",
      "Ether.js",
      "Alchemy",
      "Tenderly",
      "Fly.io",
      "Vite",
      "React",
      "Vercel",
      "Cloudflare",
      "TailwindCSS",
      "clsx",
      "GitHub",
    ],
  },
  // {
  //   name: "Mobile landing pages for Betcris",
  //   description:
  //     "MOBA counter-pick website to helps players pick smarter and rank up.",
  //   url: "https://mobile-legends-counters.vercel.app/",
  //   stacks: [
  //     "CSS3",
  //     "HTML5",
  //     "Astro",
  //     "React",
  //     "AWS",
  //     "Cloudflare",
  //     "TailwindCSS",
  //     "JavaScript",
  //     "GitHub",
  //     "pnpm",
  //     "Motion",
  //   ],
  // },
  {
    name: "Tracker Description Generator",
    description:
      "Built for R2D Partners Affiliates. Supports tracker links for Leon, Slott & Twin.",
    url: "https://tracker-description-generator.vercel.app/",
    stacks: [
      "CSS3",
      "HTML5",
      "Astro",
      "Motion",
      "React",
      "Vercel",
      "TailwindCSS",
      "Cloudflare",
      "GitHub",
      "pnpm",
    ],
  },
  // {
  //   name: "Betcris Landing Pages",
  //   description:
  //     "Built mobile-only landing pages for the Betcris to support and enhance content flow and UX.",
  //   url: "https://automatizaciones-betcris.netlify.app/",
  //   stacks: [
  //     "CSS3",
  //     "HTML5",
  //     "Astro",
  //     "React",
  //     "AWS",
  //     "Cloudflare",
  //     "TailwindCSS",
  //     "JavaScript",
  //     "GitHub",
  //     "pnpm",
  //     "Motion",
  //   ],
  // },
  {
    name: "Minúsculas y Mayúsculas",
    description:
      "Simple tool to convert text between uppercase and lowercase instantly.",
    url: "https://minusculas-y-mayusculas.vercel.app/",
    stacks: [
      "HTML5",
      "Astro",
      "React",
      "CSS3",
      "TailwindCSS",
      "GitHub",
      "pnpm",
      "TypeScript",
      "JavaScript",
      "Cloudflare",
      "Motion",
    ],
  },
];

export default function Projects() {
  const [stackFilter, setStackFilter] = useState("");

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
