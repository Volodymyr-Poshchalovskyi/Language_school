import React, { useEffect, useRef } from 'react';

const SocialMedia = () => {
  // Ref для контейнера Telegram поста
  const telegramContainerRef = useRef(null);

  // Цей хук завантажує скрипти для Instagram, TikTok та Telegram
  useEffect(() => {
    const loadScript = (src, id, processFunc) => {
      if (document.getElementById(id)) {
        if (processFunc) processFunc();
        return;
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = true;
      script.onload = () => {
        if (processFunc) processFunc();
      };
      document.body.appendChild(script);
    };

    // Завантаження скриптів для Instagram та TikTok
    loadScript('//www.instagram.com/embed.js', 'instagram-embed-script', () => {
      if (window.instgrm) window.instgrm.Embeds.process();
    });

    loadScript('https://www.tiktok.com/embed.js', 'tiktok-embed-script', () => {
      if (window.tiktok) window.tiktok.embed.render();
    });
    
    // Створення та додавання скрипта для Telegram у відповідний контейнер
    if (telegramContainerRef.current) {
      const telegramScript = document.createElement('script');
      telegramScript.async = true;
      telegramScript.src = "https://telegram.org/js/telegram-widget.js?22";
      telegramScript.setAttribute('data-telegram-post', 'deutchlernenukr/1032');
      telegramScript.setAttribute('data-width', '100%');
      
      telegramContainerRef.current.innerHTML = '';
      telegramContainerRef.current.appendChild(telegramScript);
    }

  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Ми в соціальних мережах
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Блок 1: Instagram */}
          <div className="bg-white rounded-3xl shadow-lg p-6 group transition duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DC4EY2HsZoT/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14" 
              style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'calc(100% - 2px)'}}>
            </blockquote>
          </div>

          {/* Блок 2: TikTok (Виправлено) */}
          {/* --- ЗМІНЕНО ТУТ: Видалено overlay, додано overflow-hidden та негативний margin до blockquote --- */}
          <div className="bg-white rounded-3xl shadow-lg p-6 group transition duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center overflow-hidden">
            <blockquote 
              className="tiktok-embed" 
              cite="https://www.tiktok.com/@besonderes.deutsch/video/7301413141257145605" 
              data-video-id="7301413141257145605" 
              style={{maxWidth: '100%', minWidth: 'auto', width: '100%', marginBottom: '-130px'}}
            >
              <section> 
                <a target="_blank" rel="noopener noreferrer" title="@besonderes.deutsch" href="https://www.tiktok.com/@besonderes.deutsch?refer=embed">@besonderes.deutsch</a>
              </section> 
            </blockquote>
          </div>
          
          {/* Блок 3: Telegram */}
          <div 
            ref={telegramContainerRef}
            className="bg-white rounded-3xl shadow-lg p-6 group transition duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center min-h-[400px]"
          >
            {/* Сюди буде вставлено пост Telegram */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
