import React from "react";

/**
 * Reusable lazy-load wrapper with a minimal skeleton placeholder.
 * Renders a centered pulse animation inside a min-height container.
 */
const LazySection = ({ children, minHeight = "50vh" }) => (
  <React.Suspense
    fallback={
      <div
        className="flex items-center justify-center c-space"
        style={{ minHeight }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="size-8 rounded-full border-2 border-lavender/30 border-t-lavender animate-spin" />
          <p className="text-xs text-neutral-500 tracking-wider uppercase">Loading</p>
        </div>
      </div>
    }
  >
    {children}
  </React.Suspense>
);

export default LazySection;
