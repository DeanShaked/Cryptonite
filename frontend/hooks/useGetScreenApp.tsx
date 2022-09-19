import { useEffect, useState } from 'react';

/**
 * @title useGetScreenHeight React Hook
 * @description
 * This hook will run when the app is first initiated,
 * it will add event listeners to update the window dimensions
 * when the user resize or refresh the browser.
 */

export const useGetScreenHeight = () => {
  const [height, setHeight] = useState<number | null>(null);

  /* Check if window is available */
  if (typeof window !== 'undefined') {
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight;
      setHeight(newHeight);
    };

    /* Initialize height */
    useEffect(() => {
      setHeight(window.innerHeight);
    }, []);

    /* Update window dimensions on resize or when the DOM was fully loaded */
    useEffect(() => {
      window.addEventListener('resize', updateWindowDimensions);
      window.addEventListener('DOMContentLoaded', updateWindowDimensions);
      return () => {
        window.removeEventListener('resize', updateWindowDimensions);
        window.addEventListener('DOMContentLoaded', updateWindowDimensions);
      };
    }, []);
  } else {
    useEffect(() => {
      setHeight(0);
    }, []);
  }

  return height;
};
