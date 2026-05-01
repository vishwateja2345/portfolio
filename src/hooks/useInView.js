import { useEffect, useRef, useState } from "react";

/**
 * Lightweight Intersection Observer hook.
 * Returns [ref, isInView].
 * Once `triggerOnce` fires, the observer disconnects to save resources.
 */
export function useInView({ threshold = 0, rootMargin = "200px", triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}
