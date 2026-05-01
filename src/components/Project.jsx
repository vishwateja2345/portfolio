import { memo, useCallback } from "react";

const ProjectCard = memo(({ project, onReadMore }) => {
  const { title, description, techStack } = project;

  const categoryLabel =
    project.category === "fullstack"
      ? "Full Stack"
      : project.category === "aiml"
      ? "AI / ML / GenAI"
      : "Frontend";

  const categoryColor =
    project.category === "fullstack"
      ? "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30"
      : project.category === "aiml"
      ? "from-violet-500/20 to-violet-500/5 text-violet-400 border-violet-500/30"
      : "from-sky-500/20 to-sky-500/5 text-sky-400 border-sky-500/30";

  const handleClick = useCallback(() => {
    onReadMore(project);
  }, [onReadMore, project]);

  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.03]">
      {/* Category Badge */}
      <span
        className={`inline-flex w-fit items-center gap-1.5 rounded-full border bg-gradient-to-r px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${categoryColor}`}
      >
        <span className="size-1.5 rounded-full bg-current" />
        {categoryLabel}
      </span>

      {/* Title */}
      <h3 className="mt-4 text-lg font-bold text-white leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-2 flex-grow">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {techStack.slice(0, 5).map((tech, i) => (
          <span
            key={i}
            className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-neutral-300 border border-white/[0.06]"
          >
            {tech}
          </span>
        ))}
        {techStack.length > 5 && (
          <span className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-neutral-500 border border-white/[0.06]">
            +{techStack.length - 5}
          </span>
        )}
      </div>

      {/* Read More Button */}
      <button
        onClick={handleClick}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-lavender cursor-pointer transition-colors duration-200 hover:text-white group/btn"
      >
        <span>Read More</span>
        <svg
          className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>

      {/* Subtle hover glow — lightweight opacity transition only */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-lavender/[0.04] via-transparent to-transparent" />
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
