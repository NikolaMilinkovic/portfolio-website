import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Set the page title based on the current path
    const titleMap = {
      '/': 'Nikola Milinkovic | Portfolio',
      '/case-study/battleship': 'Battleship Case Study | Nikola Milinkovic',
      '/case-study/mc-schematic-manager': 'MC Schematic Manager | Nikola Milinkovic',
      '/case-study/cli-data-structures': 'CLI Data Structures | Nikola Milinkovic',
      '/case-study/portfolio-website': 'Portfolio Website Case Study | Nikola Milinkovic',
    };
    const title = titleMap[location.pathname] || 'Nikola Milinkovic | Portfolio';
    document.title = title;

    // Track the page view with gtag.js and include the title
    window.gtag('config', 'G-8309RXRL30', {
      page_path: location.pathname,
      title,
    });
  }, [location]);

  return null; // This component does not need to render anything
}

export default PageTracker;
