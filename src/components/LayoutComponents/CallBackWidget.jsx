//* A widget component that provides a call-back functionality.
//* It includes a floating button, a modal form, and handles data submission to Supabase.

import React, { useState, useEffect, useRef } from 'react';
// ! Imports the Supabase client for database interaction.
import { supabase } from '../../supabaseClient';

// === Internal Modal Component ===
// * A self-contained, reusable modal for displaying UI elements.
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    // * Handles closing the modal when clicking on the backdrop.
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
    >
      {/* ! Prevents the modal from closing when the content is clicked. */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-scale-in"
      >
        {children}
      </div>
    </div>
  );
}

// === Main Component ===
function CallBackWidget() {
  // * State for UI visibility and form data.
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  // ? A ref is used to get a direct reference to the button for the shake animation.
  const buttonRef = useRef(null);

  // * Effect to make the button visible after an initial delay.
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonVisible(true);
    }, 2000);
    // ! Cleanup function to prevent memory leaks if the component unmounts.
    return () => clearTimeout(timer);
  }, []);

  // * Effect to trigger a "shake" animation on the button at regular intervals.
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
    // ! Cleanup function for the interval.
    return () => clearInterval(intervalId);
  }, [isButtonVisible]);

  // * Handlers for modal state and form submission.
  const handleOpenModal = () => {
    setModalOpen(true);
    setSubmitted(false);
    setPhoneNumber('');
    setError('');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // ! Asynchronous function to handle form validation and Supabase submission.
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

  // * Injects CSS animations directly into the component's scope.
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

      {/* * The modal backdrop, conditionally rendered to blur the background. */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md animate-fade-in"
          onClick={handleCloseModal}
        />
      )}

      {/* * The floating call-back button with animated visibility and shake effect. */}
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

      {/* ! The modal component, which displays either the form or the success message. */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {isSubmitted ? (
          // * Success message component.
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
          // * Form for entering a phone number.
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
