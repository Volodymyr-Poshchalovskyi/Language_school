//* A component that scrolls the window to the top whenever the route changes.

import { useEffect } from 'react';
// * 'useLocation' is a hook that provides access to the current URL location object.
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // ! Extracts the 'pathname' from the location object.
  const { pathname } = useLocation();

  // * The core logic: an effect that runs every time 'pathname' changes.
  useEffect(() => {
    // ? Scrolls the window to the top (0, 0) of the document.
    window.scrollTo(0, 0);
  }, [pathname]); // ! The dependency array ensures the effect is triggered on route changes.

  // * This component does not render any UI, so it returns null.
  return null;
}

export default ScrollToTop;
