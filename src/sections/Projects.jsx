import { useState, useCallback, useMemo, lazy } from "react";
import { motion, AnimatePresence } from "motion/react";
import { myProjects } from "../constants";
import ProjectCard from "../components/Project";

// Code-split: modal only loaded when user clicks "Read More"
const ProjectDetails = lazy(() => import("../components/ProjectDetails"));

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack Projects" },
  { id: "aiml", label: "AI / ML / GenAI Projects" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Memoize filtered list — only recomputes when tab changes
  const filteredProjects = useMemo(
    () =>
      activeTab === "all"
        ? myProjects
        : myProjects.filter((p) => p.category === activeTab),
    [activeTab]
  );

  // Stable callback refs to prevent child re-renders
  const handleReadMore = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleTabClick = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  return (
    <section className="relative c-space section-spacing" id="work">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-heading">My Projects</h2>
        <a
          href="https://github.com/vishwateja2345"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
        >
          <img
            src="/assets/logos/github.svg"
            className="size-4 opacity-60"
            alt=""
            loading="lazy"
            width={16}
            height={16}
          />
          View all on GitHub
        </a>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative px-5 py-2.5 text-sm font-medium rounded-full cursor-pointer transition-all duration-300 ${
              activeTab === tab.id
                ? "text-white"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-lavender/30 to-royal/30 border border-lavender/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 h-[1px] w-full" />

      {/* Project Grid */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard
                project={project}
                onReadMore={handleReadMore}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal — lazy loaded on demand */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            closeModal={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
