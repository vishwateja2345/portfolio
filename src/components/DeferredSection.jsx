import React from "react";
import { useInView } from "../hooks/useInView";
import LazySection from "../components/LazySection";

/**
 * Deferred section wrapper.
 * Does NOT mount children until the sentinel enters the viewport.
 * Combines IntersectionObserver + React.lazy for true deferred loading.
 */
const DeferredSection = ({ children, minHeight = "50vh", rootMargin = "300px" }) => {
  const [ref, isInView] = useInView({ rootMargin, triggerOnce: true });

  return (
    <div ref={ref} style={{ minHeight: isInView ? "auto" : minHeight }}>
      {isInView ? children : null}
    </div>
  );
};

export default DeferredSection;
