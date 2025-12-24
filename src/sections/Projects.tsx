import ProjectsGrid from "@components/ProjectsGrid";

export interface Project {
  name: string;
  description: string;
  url: string;
  stacks: string[];
}

const mainProjects: Project[] = [
  {
    name: "TREBOLBETS",
    description:
      "Online casino with my original games, supporting crypto payments and user registration.",
    url: "https://trebolbets.com/",
    stacks: [
      "Vercel",
      "NextJS",
      "TypeScript",
      "Supabase",
      "GSAP",
      "Axios",
      "TailwindCSS",
      "Express",
      "Socket IO",
      "React",
      "HTML5",
    ],
  },
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
    name: "MI CASA DE APUESTA",
    description: "Affiliate iGaming site targeting Peru market.",
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

const sideProjects: Project[] = [
  {
    name: "PLINKO",
    description:
      "Game built with modern stack to drop balls into a multi-row pin pyramid, bouncing randomly until they reach the payout bins at the bottom.",
    url: "http://plinko-game-casino.vercel.app/",
    stacks: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "Matter.js",
      "Canvas API",
      "Tailwind CSS",
      "Radix UI",
      "Phosphor Icons",
      "Howler.js",
      "Chart.js",
      "react-chartjs-2",
    ],
  },
  {
    name: "ZELDA SLOT",
    description:
      "A fantasy slot game inspired by Zelda. It features smooth reel animations, and nostalgic sound effects.",
    url: "https://zelda-slot.vercel.app/",
    stacks: [
      "Vercel",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "GSAP",
      "PixiJS",
      "React",
      "HTML5",
    ],
  },
  {
    name: "CLASSIC CASINO",
    description:
      "Simple casino offering live matches and popular DEMO slot games.",
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
    name: "COLOR GUESS GAME",
    description:
      "An interactive color guessing game, featuring a persistent stage for seamless gameplay.",
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
    name: "ETH ADDRESS SCANNER",
    description:
      "scan any Ethereum address to retrieve real-time blockchain data.",
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
];

export default function Projects() {
  return (
    <section className="my-4">
      {/* Social Links */}


      {/* Main Projects */}
      <h2 className="text-3xl font-bold mb-4 mt-8">Projects</h2>
      <ProjectsGrid projects={mainProjects} noResults={false} />

      {/* Other Projects */}
      <h2 className="text-3xl font-bold mb-4 mt-8">Playground</h2>
      <ul className="list-disc list-inside space-y-2">
        {sideProjects.map((project) => (
          <li key={project.name}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {project.name}
            </a>
            : {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
