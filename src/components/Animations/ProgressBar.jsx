import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledHeight = window.scrollY;
      const percentage = (scrolledHeight / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-orange-500 z-50 transition-width duration-300"
      style={{ width: `${scrollPercentage}%` }}
    />
  );
};

export default ProgressBar;
