import { useState } from "react";
import { InputLightEffect } from "@components/inputLightEffect";
import ProjectsGrid from "@components/ProjectsGrid";

const allProjects = [
  {
    name: "PeerPlay Games",
    description:
      "PeerPlay Games casino startup showcased at ICE Barcelona 2025 attracting investors.",
    stacks: [
      "TailwindCSS",
      "Vite",
      "TailwindCSS",
      "Redux",
      "WebSockets",
      "Axios",
      "Motion",
      "clsx",
      "HTML5",
      "CSS3",
      "Docker",
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
    stacks: [
      "Astro",
      "React",
      "HTML5",
      "TailwindCSS",
      "MDX",
      "Vercel",
      "Supabase",
      "Bun",
      "Typescript",
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
      <InputLightEffect
        value={stackFilter}
        onChange={(e) => setStackFilter(e.target.value)}
      />

      {/* Projects Grid */}
      <ProjectsGrid projects={filteredProjects} noResults={noResults} />
    </section>
  );
}
