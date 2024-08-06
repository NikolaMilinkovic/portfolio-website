import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Set the page title based on the current path
    const titleMap = {
      '/': 'Home | Your Website',
      '/case-study/battleship': 'Battleship Case Study | Your Website',
      '/case-study/mc-schematic-manager': 'MC Schematic Manager | Your Website',
      '/case-study/cli-data-structures': 'CLI Data Structures | Your Website',
      '/case-study/portfolio-website': 'Portfolio Website Case Study | Your Website',
    };
    const title = titleMap[location.pathname] || 'Default Portfolio Website Pageview';
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
