import "@styles/ProjectsGrid.css";
import { type Project } from "./../sections/Projects";

interface ProjectsGridProps {
  projects: Project[];
  noResults: boolean;
}

export default function ProjectsGrid({
  projects,
  noResults,
}: ProjectsGridProps) {
  return (
    <div
      className={`grid gap-2 mt-4 ${
        noResults ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3"
      } group`}
    >
      {/* No results message */}
      {noResults ? (
        <span className="text-amber-400">
          Required stack? I learn fast and deliver results.
        </span>
      ) : (
        <>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              aria-label="Go to LinkedIn"
              className="flex flex-col justify-between space-y-2 px-3 py-4 border border-cyan-900 hover:border-cyan-500 rounded-md transition-opacity duration-300 
                         group-hover:opacity-40 hover:opacity-100"
            >
              <h3 className="font-semibold text-sm">{project.name}</h3>
              <p className="text-sm opacity-80">{project.description}</p>

              {/* Stack Carousel */}
              <div className="relative overflow-hidden h-5">
                {/* Gradients */}
                {/* <span className="absolute inset-y-0 -left-3 w-10 z-10 bg-gradient-to-r from-black from-50% to-transparent blur-sm" /> */}
                {/* <span className="absolute inset-y-0 -right-3 w-10 z-10 bg-gradient-to-l from-black from-50% to-transparent blur-sm" /> */}

                {/* Animated Wrapper */}
                <div className="animation-carousel">
                  {project.stacks.map((stack, i) => (
                    <span
                      key={`original-${i}`}
                      className="mr-2 text-xs sm:text-sm text-cyan-500"
                    >
                      {stack} ·
                    </span>
                  ))}
                  {project.stacks.map((stack, i) => (
                    <span
                      key={`clone-${i}`}
                      className="mr-2 text-xs text-cyan-500"
                    >
                      {stack} ·
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </>
      )}
    </div>
  );
}
