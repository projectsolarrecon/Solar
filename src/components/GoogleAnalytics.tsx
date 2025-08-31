import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics component for tracking page views and user interactions
function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Only run if Google Analytics is loaded
    if (typeof window !== 'undefined' && window.gtag) {
      // Track page views on route changes
      window.gtag('config', 'G-T257LDLPRB', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
}

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default GoogleAnalytics;