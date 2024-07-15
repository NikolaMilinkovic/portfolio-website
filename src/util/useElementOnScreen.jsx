import { useEffect, useRef } from 'react';

// HOW TO USE:

// const [isVisible, setIsVisible] = useState(false);

// const [containerRef] = useElementOnScreen({
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.6,
// }, isVisible, setIsVisible, true);

// Hook up the element that is being observed with ref={containerRef}
// Use isVisible to add / remove classes from elements
// true / false specifies if the method will run once or always

const useElementOnScreen = (options, isVisible, setIsVisible, runOnce = false) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const reference = containerRef.current;

    const callback = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      if (runOnce && isVisible) {
        observer.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    if (reference) observer.observe(reference);

    return () => {
      if (reference) observer.unobserve(reference);
    };
  }, [containerRef, options, isVisible, setIsVisible, runOnce]);

  return [containerRef];
};

export default useElementOnScreen;
