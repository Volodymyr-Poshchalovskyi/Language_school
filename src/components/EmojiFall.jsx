import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const emojis = ['😊', '😂', '😍', '😎', '🤩', '🚀', '💖', '😜'];
const emojiData = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  char: emojis[i % emojis.length],
}));

export const EmojiFall = ({ stopRef }) => {
  const container = useRef();
  const animationTriggered = useRef(false);

  useEffect(() => {
    if (!stopRef.current) return;

    const runAnimation = () => {
      if (animationTriggered.current) return;
      animationTriggered.current = true;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      const emojiSize = 40;
      const padding = 10;

      
      const forbiddenZones = Array.from(document.querySelectorAll('.avoid-emoji')).map(el => {
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          right: rect.right + window.scrollX,
        };
      });

      const isSafe = (x, y) => {
        return !forbiddenZones.some(zone =>
          x < zone.right + padding &&
          x + emojiSize > zone.left - padding &&
          y < zone.bottom + padding &&
          y + emojiSize > zone.top - padding
        );
      };

      
      const step = pageHeight / emojiData.length;

      const positions = emojiData.map((_, index) => {
        let x, y, tries = 0;
        do {
          const baseY = step * index;
          y = baseY + Math.random() * (step - emojiSize);
          x = Math.random() * (viewportWidth - emojiSize);
          tries++;
        } while (!isSafe(x, y) && tries < 50);
        return { x, y };
      });

      const ctx = gsap.context(() => {
        gsap.utils.toArray('.emoji').forEach((emoji, i) => {
          gsap.set(emoji, {
            x: Math.random() * viewportWidth,
            y: -150,
            opacity: 1,
          });

          const tl = gsap.timeline();
          const midY = viewportHeight / 2;

          tl.to(emoji, {
            y: midY + (Math.random() * 100 - 50),
            duration: Math.random() * 1.5 + 1,
            ease: 'bounce.out',
            delay: Math.random() * 1.5,
          });

          const finalPos = positions[i];
          tl.to(emoji, {
            x: finalPos.x,
            y: finalPos.y,
            duration: Math.random() * 2 + 1.5,
            ease: 'power1.inOut',
            opacity: 0.9,
          });
        });
      }, container);

      return () => ctx.revert();
    };

    const handleLoad = () => {
      setTimeout(runAnimation, 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [stopRef]);

  return (
    <div ref={container} className="emoji-container">
      {emojiData.map(data => (
        <div key={data.id} className="emoji">
          {data.char}
        </div>
      ))}
    </div>
  );
};
