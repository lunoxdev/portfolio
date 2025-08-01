import "@styles/ProjectsGrid.css";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col justify-between space-y-2 px-3 py-6 border border-cyan-950 hover:border-cyan-500 rounded-md"
        >
          <h3 className="text-sm font-semibold">{project.name}</h3>
          <p className="text-xs">{project.description}</p>

          {/* Stack Carousel */}
          <div className="relative overflow-hidden h-5">
            {/* Gradients */}
            <span className="absolute inset-y-0 -left-3 w-10 z-10 bg-gradient-to-r from-black from-50% to-transparent blur-sm" />
            <span className="absolute inset-y-0 -right-3 w-10 z-10 bg-gradient-to-l from-black from-50% to-transparent blur-sm" />

            {/* Animated Wrapper */}
            <div className="animation-carousel">
              {project.stacks.map((stack, i) => (
                <span
                  key={`original-${i}`}
                  className="mr-2 text-[10px] text-cyan-500"
                >
                  {stack} ·
                </span>
              ))}
              {project.stacks.map((stack, i) => (
                <span
                  key={`clone-${i}`}
                  className="mr-2 text-[10px] text-cyan-500"
                >
                  {stack} ·
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
