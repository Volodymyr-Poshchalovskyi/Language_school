import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

if (typeof window.emojiPositionCache === 'undefined') {
  window.emojiPositionCache = {};
}

const EMOJI_OPTIONS = ['🔥', '👾', '🇩🇪', '📎', '💻', '📚', '⚡️', '🧨', '🧚🏻‍♀️'];

const getIosEmojiUrl = (emoji) => {
  if (emoji === '⚡️') {
    return `https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/26a1.png`;
  }
  const symbols = Array.from(emoji);
  const codePoints = symbols.map((s) => s.codePointAt(0).toString(16));
  const fileName = codePoints.join('-');
  return `https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${fileName}.png`;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// ! ЗМІНА ТУТ: Нова функція для розрахунку позиції по краях екрану
const getRandomEdgeX = (viewportWidth, emojiSize) => {
  const leftZoneEnd = viewportWidth * 0.15;
  const rightZoneStart = viewportWidth * (1 - 0.12); // Останні 12%

  // З 50% шансом обираємо ліву або праву сторону
  if (Math.random() < 0.5) {
    // Ліва сторона (0% - 15%)
    return Math.random() * (leftZoneEnd - emojiSize);
  } else {
    // Права сторона (88% - 100%)
    return (
      rightZoneStart +
      Math.random() * (viewportWidth - rightZoneStart - emojiSize)
    );
  }
};

const MOBILE_BREAKPOINT = 768;

export const EmojiFall = ({ stopRef, pathname }) => {
  const container = useRef();

  useGSAP(
    () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        return;
      }

      const runMainLogic = () => {
        setTimeout(() => {
          if (!stopRef.current) return;

          if (container.current) {
            container.current.innerHTML = '';
          }
          gsap.killTweensOf(container.current.children);

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

          window.emojiPositionCache[pathname] = [];

          const target = stopRef.current;
          const viewportWidth = window.innerWidth;
          const emojiSize = 40;
          const padding = 20;
          const footer = document.querySelector('footer');
          const allForbiddenNodes = document.querySelectorAll('.avoid-emoji');

          const allForbiddenZones = Array.from(allForbiddenNodes).map((el) => {
            const rect = el.getBoundingClientRect();
            return {
              top: rect.top + window.scrollY,
              bottom: rect.bottom + window.scrollY,
              left: rect.left + window.scrollX,
              right: rect.right + window.scrollX,
            };
          });

          const landingAreaYStart = target.offsetTop;
          const landingAreaYEnd = footer
            ? footer.offsetTop - padding - emojiSize
            : document.body.scrollHeight;
          const landingAreaHeight = landingAreaYEnd - landingAreaYStart;

          if (landingAreaHeight <= 0) return;

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
            // ! ЗМІНА ТУТ: Використовуємо нову функцію для фінальної позиції
            const x = getRandomEdgeX(viewportWidth, emojiSize);
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

          window.emojiPositionCache[pathname] = finalPositions;
          const emojiDataToAnimate = shuffleArray(finalPositions);

          emojiDataToAnimate.forEach((pos, i) => {
            const emojiEl = document.createElement('img');
            emojiEl.className = 'emoji';
            const emojiChar = EMOJI_OPTIONS[i % EMOJI_OPTIONS.length];
            emojiEl.src = getIosEmojiUrl(emojiChar);
            container.current.appendChild(emojiEl);

            // ! ЗМІНА ТУТ: Використовуємо нову функцію для стартової позиції
            gsap.set(emojiEl, {
              x: getRandomEdgeX(viewportWidth, emojiSize),
              y: -150,
              opacity: 1,
            });
            const tl = gsap.timeline();
            tl.to(emojiEl, {
              y: target.offsetHeight * Math.random() * 0.5 + 50,
              duration: 1.5,
              ease: 'power1.out',
              delay: Math.random() * 1.5,
            })
              .to(emojiEl, {
                rotation: Math.random() > 0.5 ? -10 : 10,
                yoyo: true,
                repeat: 1,
                duration: 0.8,
              })
              .to(emojiEl, {
                x: pos.x,
                y: pos.y,
                rotation: 0,
                duration: 2,
                ease: 'power1.inOut',
                opacity: 0.9,
              });
          });
        }, 100);
      };

      if (document.readyState === 'complete') {
        runMainLogic();
      } else {
        window.addEventListener('load', runMainLogic, { once: true });
      }

      return () => {
        window.removeEventListener('load', runMainLogic);
      };
    },
    { dependencies: [pathname, stopRef], scope: container }
  );

  return <div ref={container} className="emoji-container" />;
};
