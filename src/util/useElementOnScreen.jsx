import { useState, useEffect, useRef } from 'react';

// HOW TO USE IN FILES:

// const [containerRef, isVisible] = useElementOnScreen({
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.6,
// });

// Hook up the element that is being observed with ref={containerRef}
// Use isVisible to add / remove classes from elements

const useElementOnScreen = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const callback = ((entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  });

  useEffect(() => {
    console.log(`isVisible is now: ${isVisible}`);
  }, [isVisible]);

  useEffect(() => {
    const reference = containerRef.current;
    const observer = new IntersectionObserver(callback, options);
    if (reference) observer.observe(reference);

    return () => {
      if (reference) observer.unobserve(reference);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
