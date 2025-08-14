//* A component that renders a progress bar based on the user's scroll position.

import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  // * State hook to store the calculated scroll percentage.
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // ! useEffect hook to add and clean up a scroll event listener.
  useEffect(() => {
    // * The callback function that calculates the scroll percentage.
    const handleScroll = () => {
      // ? Calculates the total scrollable height of the document.
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledHeight = window.scrollY;
      const percentage = (scrolledHeight / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    // * Adds the event listener to the window on component mount.
    window.addEventListener('scroll', handleScroll);

    // * Cleanup function: removes the listener on component unmount.
    // ? This prevents memory leaks and ensures the effect is self-contained.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // ! The empty dependency array ensures this effect runs only once.

  return (
    // * The progress bar component itself.
    // ? The `style` attribute dynamically sets the width based on the state.
    <div
      className="fixed top-0 left-0 h-1 bg-orange-500 z-50 transition-width duration-300"
      style={{ width: `${scrollPercentage}%` }}
    />
  );
};

export default ProgressBar;
