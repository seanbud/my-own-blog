import { useEffect, useRef } from "react";
import { BlogContextType } from "../store/store";

const useIntersection = (context: BlogContextType) => {
  const containerRef = useRef(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInitialMount.current
            ? (isInitialMount.current = false)
            : context.setPage();
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return [containerRef];
};

export default useIntersection;
