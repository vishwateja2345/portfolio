import { motion } from "motion/react";
import { useEffect, useCallback, memo } from "react";

const ProjectDetails = memo(({ project, closeModal }) => {
  const {
    title,
    description,
    keyFeatures,
    techStack,
    implementationDetails,
    subDescription,
    image,
    href,
    category,
  } = project;

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  const categoryLabel =
    category === "fullstack"
      ? "Full Stack"
      : category === "aiml"
      ? "AI / ML / GenAI"
      : "Frontend";

  const categoryColor =
    category === "fullstack"
      ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
      : category === "aiml"
      ? "text-violet-400 border-violet-500/30 bg-violet-500/10"
      : "text-sky-400 border-sky-500/30 bg-sky-500/10";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {/* Backdrop — bg-black/80 instead of backdrop-blur to avoid GPU-heavy blur compositing */}
      <div
        className="fixed inset-0 bg-black/80"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-4 my-10 sm:my-16"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 350, damping: 32 }}
      >
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0d1033] to-[#080a1e] shadow-2xl shadow-black/50 overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 flex items-center justify-center size-9 rounded-full bg-white/[0.08] border border-white/[0.1] cursor-pointer transition-colors duration-200 hover:bg-white/[0.15]"
          >
            <svg className="size-4 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Screenshot — lazy loaded */}
          {image && (
            <div className="relative w-full aspect-video bg-midnight overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1033] via-transparent to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-7">
            {/* Header */}
            <div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${categoryColor}`}
              >
                <span className="size-1.5 rounded-full bg-current" />
                {categoryLabel}
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white leading-tight">
                {title}
              </h3>
            </div>

            {/* Description */}
            <div>
              <SectionLabel>Description</SectionLabel>
              <p className="text-neutral-300 leading-relaxed text-[15px]">
                {description}
              </p>
              {subDescription && subDescription.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  {subDescription.map((line, i) => (
                    <div key={i} className="flex items-start gap-2 text-neutral-400 text-sm">
                      <span className="mt-1.5 size-1.5 rounded-full bg-lavender/60 shrink-0" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Key Features */}
            {keyFeatures && keyFeatures.length > 0 && (
              <div>
                <SectionLabel>Key Features</SectionLabel>
                <ul className="space-y-2">
                  {keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                      <svg className="mt-0.5 size-4 shrink-0 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {techStack && techStack.length > 0 && (
              <div>
                <SectionLabel>Tech Stack</SectionLabel>
                <div className="flex flex-wrap items-center gap-2">
                  {techStack.map((tech, i) => (
                    <span key={i} className="flex items-center">
                      <span className="rounded-lg bg-white/[0.06] border border-white/[0.08] px-3 py-1.5 text-sm font-medium text-neutral-200">
                        {tech}
                      </span>
                      {i < techStack.length - 1 && (
                        <span className="ml-2 text-neutral-600 text-xs">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Implementation Details */}
            {implementationDetails && implementationDetails.length > 0 && (
              <div>
                <SectionLabel>Implementation Details</SectionLabel>
                <div className="space-y-2.5">
                  {implementationDetails.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-neutral-300 text-sm"
                    >
                      <span className="mt-1 flex items-center justify-center size-5 rounded-md bg-lavender/10 border border-lavender/20 text-[10px] font-bold text-lavender shrink-0">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/[0.06]">
              {href?.github && (
                <a
                  href={href.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors duration-200 hover:bg-white/[0.12] hover:text-white"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {href?.live && (
                <a
                  href={href.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lavender/20 to-royal/20 border border-lavender/30 px-4 py-2.5 text-sm font-medium text-lavender transition-colors duration-200 hover:from-lavender/30 hover:to-royal/30 hover:text-white"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectDetails.displayName = "ProjectDetails";

const SectionLabel = memo(({ children }) => (
  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
    <span className="h-[1px] w-4 bg-lavender/40" />
    {children}
  </h4>
));

SectionLabel.displayName = "SectionLabel";

export default ProjectDetails;
