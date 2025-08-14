import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../supabaseClient'; // Переконайтесь, що цей шлях до файлу правильний

// === Внутрішній компонент модального вікна ===
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-scale-in"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Закрити"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

// === Основний компонент ===
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
      if (buttonElement) {
        buttonElement.classList.add('animate-shake');
        setTimeout(() => {
          buttonElement.classList.remove('animate-shake');
        }, 820);
      }
    }, 5000);
    return () => clearInterval(intervalId);
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

    console.log('1. Починаю відправку...');

    const { data, error: supabaseError } = await supabase
      .from('CallBacks') // Правильна назва таблиці
      .insert([{ phone: phoneNumber }])
      .select();

    console.log('2. Відправка завершена.');
    console.log('   - Повернуті дані (data):', data);
    console.log('   - Повернута помилка (error):', supabaseError);

    if (supabaseError) {
      console.error('ПОМИЛКА SUPABASE:', supabaseError);
      alert('На жаль, сталася помилка. Спробуйте ще раз.');
    } else {
      console.log('3. Успіх! Показую модальне вікно.');
      setError('');
      setSubmitted(true);
    }
  };

  const animationStyles = `
    @keyframes scale-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }

    @keyframes shake {
      10%, 90% { transform: translate3d(-1px, 0, 0) rotate(-1deg); }
      20%, 80% { transform: translate3d(2px, 0, 0) rotate(2deg); }
      30%, 50%, 70% { transform: translate3d(-3px, 0, 0) rotate(-3deg); }
      40%, 60% { transform: translate3d(3px, 0, 0) rotate(3deg); }
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
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md animate-fade-in"
          onClick={handleCloseModal}
        />
      )}

      <button
        ref={buttonRef}
        onClick={handleOpenModal}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg z-40 transition-all duration-300 transform hover:scale-110 hover:bg-green-600 ${isButtonVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        aria-label="Замовити дзвінок"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.842 18 2 13.158 2 7V3z"></path>
        </svg>
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {isSubmitted ? (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg
                className="h-10 w-10 text-green-600"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Дякуємо!</h3>
            <p className="text-gray-600">
              Ми отримали ваш запит і скоро зателефонуємо.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Замовте дзвінок
            </h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="callbackPhone" className="sr-only">
                Номер телефону
              </label>
              <input
                id="callbackPhone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ваш номер телефону"
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${error ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Подзвоніть мені
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              Ми зателефонуємо вам впродовж 2-х годин у робочий час.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}

export default CallBackWidget;
