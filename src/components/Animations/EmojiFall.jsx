//* The EmojiFall component creates a falling emoji particle effect with GSAP.
//* It's designed to be performant, responsive, and avoid overlapping key UI elements.

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// ! Caches final emoji positions in a global object to prevent re-calculation on page transitions.
if (typeof window.emojiPositionCache === 'undefined') {
  window.emojiPositionCache = {};
}

// * A fixed set of emojis used for the animation.
const EMOJI_OPTIONS = ['🔥', '👾', '🇩🇪', '📎', '💻', '📚', '⚡️', '🧨', '🧚🏻‍♀️'];

// * Helper function to generate an emoji URL from a character.
// ? This approach ensures consistent visual style across different browsers and devices.
const getIosEmojiUrl = (emoji) => {
  if (emoji === '⚡️') {
    return `https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/26a1.png`;
  }

  const symbols = Array.from(emoji);
  const codePoints = symbols.map((s) => s.codePointAt(0).toString(16));
  const fileName = codePoints.join('-');

  return `https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${fileName}.png`;
};

// * Fisher-Yates shuffle algorithm to randomize emoji selection.
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// ! Defines a mobile breakpoint to disable the animation on smaller screens.
// ? This is a key performance optimization to prevent resource-heavy animations on mobile.
const MOBILE_BREAKPOINT = 768;

export const EmojiFall = ({ stopRef, pathname }) => {
  const container = useRef();

  // * The primary GSAP animation hook. It runs when dependencies change.
  useGSAP(
    () => {
      // ! The animation is explicitly disabled below the mobile breakpoint.
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        return;
      }

      // * The main animation logic, encapsulated in a function to handle window 'load' event.
      const runMainLogic = () => {
        // ? Ensures the target element (`stopRef`) exists before proceeding.
        if (!stopRef.current) return;

        // * Clears the container and kills any existing GSAP tweens on its children.
        if (container.current) {
          container.current.innerHTML = '';
        }
        gsap.killTweensOf(container.current.children);

        // * Checks if emoji positions are already cached for the current pathname.
        // ! If cached, it skips the expensive calculation and just renders the emojis.
        if (window.emojiPositionCache[pathname]) {
          const finalPositions = window.emojiPositionCache[pathname];
          finalPositions.forEach((data, i) => {
            const emojiEl = document.createElement('img');
            emojiEl.className = 'emoji';
            const emojiChar = EMOJI_OPTIONS[i % EMOJI_OPTIONS.length];
            emojiEl.src = getIosEmojiUrl(emojiChar);

            container.current.appendChild(emojiEl);
            gsap.set(emojiEl, {
              x: data.x,
              y: data.y,
              opacity: 0.9,
              rotation: 0,
            });
          });
          return;
        }

        // * If not cached, initializes the cache for the current path.
        window.emojiPositionCache[pathname] = [];

        // ! Defines the "forbidden zones" where emojis should not land.
        // * This prevents emojis from obscuring important UI elements like forms.
        const target = stopRef.current;
        const viewportWidth = window.innerWidth;
        const emojiSize = 40;
        const padding = 20;
        const footer = document.querySelector('footer');
        const allForbiddenNodes = document.querySelectorAll('.avoid-emoji');

        // * Calculates the bounding box for all forbidden elements.
        const allForbiddenZones = Array.from(allForbiddenNodes).map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
            right: rect.right + window.scrollX,
          };
        });

        // * Determines the valid vertical range for emojis to land in.
        const landingAreaYStart = target.offsetTop;
        const landingAreaYEnd = footer
          ? footer.offsetTop - padding - emojiSize
          : document.body.scrollHeight;
        const landingAreaHeight = landingAreaYEnd - landingAreaYStart;

        if (landingAreaHeight <= 0) return;

        // * Generates random, non-overlapping positions for emojis.
        // ? This is an iterative process to ensure emojis don't crowd together.
        const minDistance = 400;
        const minDistanceSq = minDistance * minDistance;
        const finalPositions = [];
        const maxEmojis = 25;
        const maxAttempts = 2000;

        for (
          let i = 0;
          i < maxAttempts && finalPositions.length < maxEmojis;
          i++
        ) {
          const x = Math.random() * (viewportWidth - emojiSize);
          const y = Math.random() * landingAreaHeight + landingAreaYStart;

          const isZoneSafe = !allForbiddenZones.some(
            (zone) =>
              x < zone.right + padding &&
              x + emojiSize > zone.left - padding &&
              y < zone.bottom + padding &&
              y + emojiSize > zone.top - padding
          );

          if (isZoneSafe) {
            const isDistanceSafe = !finalPositions.some((p) => {
              const dx = p.x - x;
              const dy = p.y - y;
              return dx * dx + dy * dy < minDistanceSq;
            });
            if (isDistanceSafe) {
              finalPositions.push({ x, y });
            }
          }
        }

        // ! Caches the newly calculated positions.
        window.emojiPositionCache[pathname] = finalPositions;

        const emojiDataToAnimate = shuffleArray(finalPositions);

        // * Creates and animates each emoji.
        emojiDataToAnimate.forEach((pos, i) => {
          const emojiEl = document.createElement('img');
          emojiEl.className = 'emoji';

          const emojiChar = EMOJI_OPTIONS[i % EMOJI_OPTIONS.length];
          emojiEl.src = getIosEmojiUrl(emojiChar);

          container.current.appendChild(emojiEl);

          // * Initial GSAP state: emojis start off-screen at the top.
          gsap.set(emojiEl, {
            x: Math.random() * viewportWidth,
            y: -150,
            opacity: 1,
          });

          // * Defines the animation timeline for each emoji.
          const tl = gsap.timeline();
          // ? Phase 1: Initial fall with a random delay.
          tl.to(emojiEl, {
            y: target.offsetHeight * Math.random() * 0.5 + 50,
            duration: 1.5,
            ease: 'power1.out',
            delay: Math.random() * 1.5,
          // ? Phase 2: A slight wobble animation.
          }).to(emojiEl, {
            rotation: Math.random() > 0.5 ? -10 : 10,
            yoyo: true,
            repeat: 1,
            duration: 0.8,
          // ! Phase 3: Final movement to the calculated position.
          }).to(emojiEl, {
            x: pos.x,
            y: pos.y,
            rotation: 0,
            duration: 2,
            ease: 'power1.inOut',
            opacity: 0.9,
          });
        });
      };

      // * Ensures the animation runs only after the entire page has loaded.
      // ? This is crucial to get accurate DOM element positions (e.g., footer).
      if (document.readyState === 'complete') {
        runMainLogic();
      } else {
        window.addEventListener('load', runMainLogic, { once: true });
      }

      // * Cleanup function to remove the event listener on unmount.
      return () => {
        window.removeEventListener('load', runMainLogic);
      };
    },
    // ! Dependency array. The effect re-runs when the path or the target reference changes.
    { dependencies: [pathname, stopRef], scope: container }
  );

  return <div ref={container} className="emoji-container" />;
};
