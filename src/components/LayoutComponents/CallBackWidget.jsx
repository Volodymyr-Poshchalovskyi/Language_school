//* A widget component that provides a call-back functionality.
//* This version includes an enhanced "magnetic" hover effect and a close button on the modal.

import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../supabaseClient';
import { gsap } from 'gsap';

// === Internal Modal Component ===
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#FFFFFF] dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-scale-in transition-colors duration-300"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[#69140E]/40 hover:text-[#E85F5C] dark:text-[#FFFFFF]/40 dark:hover:text-[#E85F5C] transition-colors rounded-full"
          aria-label="Закрити"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

// === Main Component ===
function CallBackWidget() {
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const buttonRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isButtonVisible) return;
    const intervalId = setInterval(() => {
      const buttonElement = buttonRef.current;
      if (buttonElement && !buttonElement.matches(':hover')) {
        // Не трясти, якщо курсор на кнопці
        buttonElement.classList.add('animate-shake');
        setTimeout(() => {
          buttonElement.classList.remove('animate-shake');
        }, 820);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [isButtonVisible]);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || !isButtonVisible || window.innerWidth < 1024) return;

    const activationDistance = 200;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < activationDistance) {
        gsap.to(button, {
          x: deltaX * 0.6,
          y: deltaY * 0.6,
          duration: 2.2,
          ease: 'power3.out',
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.5)',
        });
      }
    };

    // ! ЗМІНА ТУТ: Новий обробник для виходу курсора за межі вікна
    const onMouseLeaveWindow = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    // ! ЗМІНА ТУТ: Додаємо слухача на весь документ
    document.documentElement.addEventListener('mouseleave', onMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      // ! ЗМІНА ТУТ: Прибираємо слухача при демонтуванні
      document.documentElement.removeEventListener(
        'mouseleave',
        onMouseLeaveWindow
      );
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.5)',
      });
    };
  }, [isButtonVisible]);

  const handleOpenModal = () => {
    setModalOpen(true);
    setSubmitted(false);
    setPhoneNumber('');
    setError('');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.replace(/\D/g, '').length < 5) {
      setError('Введіть коректний номер телефону');
      return;
    }
    const { data, error: supabaseError } = await supabase
      .from('CallBacks')
      .insert([{ phone: phoneNumber }])
      .select();
    if (supabaseError) {
      console.error('SUPABASE ERROR:', supabaseError);
      alert('На жаль, сталася помилка. Спробуйте ще раз.');
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  const animationStyles = `
    @keyframes scale-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
    @keyframes shake {
      10%, 90% { transform: translate3d(-1px, 0, 0) rotate(-1deg); } 20%, 80% { transform: translate3d(2px, 0, 0) rotate(2deg); }
      30%, 50%, 70% { transform: translate3d(-3px, 0, 0) rotate(-3deg); } 40%, 60% { transform: translate3d(3px, 0, 0) rotate(3deg); }
    }
    .animate-shake { animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; }
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseModal}
        />
      )}
      <button
        ref={buttonRef}
        onClick={handleOpenModal}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center text-[#69140E] shadow-lg z-40 transition-opacity duration-300 cursor-pointer ${isButtonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Замовити дзвінок"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.842 18 2 13.158 2 7V3z"></path>
        </svg>
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {isSubmitted ? (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#F6AA1C]/20 mb-4">
              <svg
                className="h-10 w-10 text-[#F6AA1C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-2">
              Дякуємо!
            </h3>
            <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80">
              Ми отримали ваш запит і скоро зателефонуємо.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#69140E] dark:text-[#FFFFFF] mb-4">
              Замовте дзвінок
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                id="callbackPhone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ваш номер телефону"
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all bg-transparent text-[#69140E] dark:text-[#FFFFFF] placeholder:text-[#69140E]/40 dark:placeholder:text-[#FFFFFF]/40 ${error ? 'border-red-500 ring-red-300' : 'border-[#69140E]/20 dark:border-[#FFFFFF]/20 focus:ring-[#F6AA1C]'}`}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button
                type="submit"
                className="w-full mt-4 bg-[#FFD700] text-[#69140E] font-bold py-3 px-6 rounded-lg hover:bg-[#F6AA1C] transition-colors"
              >
                Подзвоніть мені
              </button>
            </form>
            <p className="text-xs text-[#69140E]/70 dark:text-[#FFFFFF]/70 mt-4">
              Ми зателефонуємо вам впродовж 2-х годин у робочий час.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}

export default CallBackWidget;
