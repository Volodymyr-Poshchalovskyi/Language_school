import React, { useEffect, useRef } from 'react';
// 1. Виправлено імпорт: тепер socialMediaInfo
import { socialMediaInfo } from '../../data/socialMediaData';

// Окремий компонент для однієї картки, щоб зробити код ще чистішим
const SocialCard = ({ name, url, embedUrl, image, alt, buttonText, buttonColor, buttonHoverColor, type, embedPost }) => {
  const embedContainerRef = useRef(null);

  useEffect(() => {
    // Логіка для вбудованих постів Instagram та Telegram
    if (type === 'embed' && embedContainerRef.current) {
      if (name === 'Instagram') {
        // Затримка для Instagram, щоб уникнути конфліктів
        setTimeout(() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          } else {
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
          }
        }, 100);
      } else if (name === 'Telegram' && embedPost) {
        const telegramScript = document.createElement('script');
        telegramScript.async = true;
        telegramScript.src = 'https://telegram.org/js/telegram-widget.js?22';
        telegramScript.setAttribute('data-telegram-post', embedPost);
        telegramScript.setAttribute('data-width', '100%');
        embedContainerRef.current.innerHTML = '';
        embedContainerRef.current.appendChild(telegramScript);
      }
    }
  }, [type, name, embedPost, embedUrl]);

  const renderContent = () => {
    switch (type) {
      case 'embed':
        if (name === 'Instagram') {
          return (
            <div ref={embedContainerRef} className="w-full h-full flex items-center justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={embedUrl}
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
                ></blockquote>
            </div>
          );
        }
        return <div ref={embedContainerRef} className="w-full h-full flex items-center justify-center" />;
      case 'image':
        return <img src={image} alt={alt} className="w-full h-full object-cover" />;
      default:
        return null;
    }
  };

  return (
    <div className="avoid-emoji bg-white rounded-3xl shadow-lg group transition duration-300 hover:shadow-xl hover:scale-105 overflow-hidden flex flex-col min-h-[580px]">
      <div className="flex-grow p-6 flex items-center justify-center">
        {renderContent()}
      </div>
      <div className="p-6 border-t border-gray-100">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-block rounded-lg ${buttonColor} px-5 py-3 text-sm font-medium text-white transition ${buttonHoverColor} text-center`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="avoid-emoji text-4xl font-extrabold text-gray-900 mb-12">
          Ми в соціальних мережах
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 2. Виправлено змінну: тепер socialMediaInfo.platforms */}
          {socialMediaInfo.platforms.map((social) => (
            <SocialCard key={social.name} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;