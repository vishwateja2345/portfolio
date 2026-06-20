import { memo, useCallback } from "react";

const CATEGORY = {
  fullstack: {
    label: "Full Stack",
    badge: "text-emerald-300 border-emerald-400/30 bg-emerald-500/10",
    glow: "from-emerald-500/25",
    ring: "group-hover:border-emerald-400/40",
    accent: "from-emerald-400/80 to-teal-500/80",
  },
  aiml: {
    label: "AI / ML / GenAI",
    badge: "text-violet-300 border-violet-400/30 bg-violet-500/10",
    glow: "from-violet-500/25",
    ring: "group-hover:border-violet-400/40",
    accent: "from-violet-400/80 to-fuchsia-500/80",
  },
  frontend: {
    label: "Frontend",
    badge: "text-sky-300 border-sky-400/30 bg-sky-500/10",
    glow: "from-sky-500/25",
    ring: "group-hover:border-sky-400/40",
    accent: "from-sky-400/80 to-blue-500/80",
  },
};

const ProjectCard = memo(({ project, onReadMore }) => {
  const { title, description, techStack, image, href } = project;
  const cat = CATEGORY[project.category] || CATEGORY.frontend;
  const initials = title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const handleClick = useCallback(() => {
    onReadMore(project);
  }, [onReadMore, project]);

  return (
    <div
      onClick={handleClick}
      className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-black/40 ${cat.ring}`}
    >
      {/* Top accent line */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${cat.accent} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {/* Thumbnail / preview */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy via-midnight to-primary">
        {/* Monogram fallback (always present, sits behind the image) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`bg-gradient-to-br ${cat.accent} bg-clip-text text-5xl font-black tracking-tight text-transparent opacity-80 transition-transform duration-500 group-hover:scale-110`}
          >
            {initials}
          </span>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="relative h-full w-full object-cover object-top opacity-90 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
          />
        )}

        {/* Image fade into card */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a18] via-[#070a18]/20 to-transparent" />

        {/* Category badge */}
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${cat.badge}`}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {cat.label}
        </span>

        {/* Quick links */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {href?.github && (
            <a
              href={href.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="GitHub repository"
              className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-neutral-200 backdrop-blur-md transition-colors hover:bg-black/70 hover:text-white"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {href?.live && (
            <a
              href={href.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Live demo"
              className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-neutral-200 backdrop-blur-md transition-colors hover:bg-black/70 hover:text-white"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-tight text-white transition-colors group-hover:text-white">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 flex-grow text-sm leading-relaxed text-neutral-400">
          {description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-neutral-300"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-neutral-500">
              +{techStack.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-lavender transition-colors group-hover:text-white">
            View details
            <svg
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${cat.glow} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
