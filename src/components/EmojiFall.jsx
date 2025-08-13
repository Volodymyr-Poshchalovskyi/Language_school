import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Створюємо глобальний кеш для зберігання позицій смайликів для кожної сторінки
if (typeof window.emojiPositionCache === 'undefined') {
  window.emojiPositionCache = {};
}

const EMOJI_OPTIONS = ['😊', '😂', '😍', '🥳', '😎', '🤩', '🚀', '💖'];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const EmojiFall = ({ stopRef, pathname }) => {
  const container = useRef();

  useGSAP(() => {
    // --- ФІНАЛЬНА НАДІЙНА ЛОГІКА ---

    const runMainLogic = () => {
      // Перевіряємо ref ще раз, оскільки 'load' може спрацювати раніше
      if (!stopRef.current) return;

      // 1. Спочатку завжди очищуємо контейнер від старих смайликів
      if (container.current) {
        container.current.innerHTML = '';
      }
      gsap.killTweensOf(container.current.children);

      // 2. Перевіряємо, чи є збережені позиції для цієї сторінки
      if (window.emojiPositionCache[pathname]) {
        // Якщо є, просто створюємо смайлики і розміщуємо їх на фінальних позиціях
        const finalPositions = window.emojiPositionCache[pathname];
        finalPositions.forEach((data, i) => {
          const emojiEl = document.createElement('div');
          emojiEl.className = 'emoji';
          emojiEl.innerText = EMOJI_OPTIONS[i % EMOJI_OPTIONS.length];
          container.current.appendChild(emojiEl);
          // Миттєво встановлюємо позицію без анімації
          gsap.set(emojiEl, { x: data.x, y: data.y, opacity: 0.9, rotation: 0 });
        });
        return; // Виходимо, анімацію запускати не потрібно
      }

      // 3. Якщо ми тут, значить це перший візит. Розраховуємо позиції та запускаємо анімацію.
      // Позначаємо, що ми почали розрахунок для цієї сторінки, щоб уникнути повторних запусків
      window.emojiPositionCache[pathname] = []; // Порожній масив як прапорець

      const target = stopRef.current;
      const viewportWidth = window.innerWidth;
      const emojiSize = 40;
      const padding = 20;
      const footer = document.querySelector('footer');
      const allForbiddenNodes = document.querySelectorAll('.avoid-emoji');
      
      const allForbiddenZones = Array.from(allForbiddenNodes).map(el => {
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          right: rect.right + window.scrollX,
        };
      });

      const landingAreaYStart = target.offsetTop;
      const landingAreaYEnd = footer ? footer.offsetTop - padding - emojiSize : document.body.scrollHeight;
      const landingAreaHeight = landingAreaYEnd - landingAreaYStart;

      if (landingAreaHeight <= 0) return;

      const minDistance = 400;
      const minDistanceSq = minDistance * minDistance;
      const finalPositions = [];
      const maxEmojis = 25;
      const maxAttempts = 2000;

      for (let i = 0; i < maxAttempts && finalPositions.length < maxEmojis; i++) {
        const x = Math.random() * (viewportWidth - emojiSize);
        const y = Math.random() * landingAreaHeight + landingAreaYStart;

        const isZoneSafe = !allForbiddenZones.some(zone =>
          x < zone.right + padding && x + emojiSize > zone.left - padding &&
          y < zone.bottom + padding && y + emojiSize > zone.top - padding
        );

        if (isZoneSafe) {
          const isDistanceSafe = !finalPositions.some(p => {
            const dx = p.x - x; const dy = p.y - y;
            return (dx * dx + dy * dy) < minDistanceSq;
          });
          if (isDistanceSafe) {
            finalPositions.push({ x, y });
          }
        }
      }
      
      // Зберігаємо розраховані позиції в кеші
      window.emojiPositionCache[pathname] = finalPositions;
      
      const emojiDataToAnimate = shuffleArray(finalPositions);

      // Створюємо та анімуємо смайлики
      emojiDataToAnimate.forEach((pos, i) => {
        const emojiEl = document.createElement('div');
        emojiEl.className = 'emoji';
        emojiEl.innerText = EMOJI_OPTIONS[i % EMOJI_OPTIONS.length];
        container.current.appendChild(emojiEl);

        gsap.set(emojiEl, { x: Math.random() * viewportWidth, y: -150, opacity: 1 });
        
        const tl = gsap.timeline();
        tl.to(emojiEl, {
          y: target.offsetHeight * Math.random() * 0.5 + 50,
          duration: 1.5,
          ease: 'power1.out',
          delay: Math.random() * 1.5,
        }).to(emojiEl, {
          rotation: Math.random() > 0.5 ? -10 : 10,
          yoyo: true,
          repeat: 1,
          duration: 0.8,
        });

        tl.to(emojiEl, {
          x: pos.x,
          y: pos.y,
          rotation: 0,
          duration: 2,
          ease: 'power1.inOut',
          opacity: 0.9,
        });
      });
    };

    // Цей блок відповідає за правильний час запуску
    if (document.readyState === 'complete') {
        // Якщо сторінка вже завантажена (навігація), запускаємо логіку
        runMainLogic();
    } else {
        // Якщо сторінка ще завантажується (перший візит), чекаємо на подію 'load'
        window.addEventListener('load', runMainLogic, { once: true });
    }

    // Функція очищення для видалення слухача подій
    return () => {
        window.removeEventListener('load', runMainLogic);
    }

  }, { dependencies: [pathname, stopRef], scope: container });

  return <div ref={container} className="emoji-container" />;
};
