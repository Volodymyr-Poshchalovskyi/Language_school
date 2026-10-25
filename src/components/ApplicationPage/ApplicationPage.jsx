"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../../supabaseClient';

// === CSS Component ===
const PageStyles = () => (
  <style>{`
    @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
    .modal-backdrop { background-color: rgba(105, 20, 14, 0.2); -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px); }
    .dark .modal-backdrop { background-color: rgba(0, 0, 0, 0.3); }
  `}</style>
);

// === Modal Component ===
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50"
    >
      {/* ! Нова тема: Оновлені кольори модального вікна */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-scale-in"
      >
        {children}
      </div>
    </div>
  );
}

// === Main Page Component ===
function ApplicationPage() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    lessonFormat: '',
    messenger: '',
    birthYear: '',
    germanLevel: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorToastVisible, setErrorToastVisible] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const format = searchParams.get('format');
    if (format === 'single' || format === 'dual') {
      setFormData((prevState) => ({ ...prevState, lessonFormat: format }));
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Please enter your first name';
    if (!formData.lastName) newErrors.lastName = 'Please enter your last name';
    if (!formData.lessonFormat) newErrors.lessonFormat = 'Please choose a format';
    if (
      !formData.birthYear ||
      isNaN(formData.birthYear) ||
      formData.birthYear < 1930 ||
      formData.birthYear > new Date().getFullYear() - 7
    ) {
      newErrors.birthYear = 'Please enter a valid year';
    }
    if (!formData.germanLevel) newErrors.germanLevel = 'Please choose your level';
    if (!formData.email && !formData.phone) {
      newErrors.email = 'Please provide an email or phone number';
      newErrors.phone = ' ';
    } else {
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Invalid email format';
      if (formData.phone && !/^\+?[0-9\s-()]{7,15}$/.test(formData.phone))
        newErrors.phone = 'Invalid phone number format';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      if (
        (name === 'email' || name === 'phone') &&
        (errors.email?.includes('or phone number') || errors.phone === ' ')
      ) {
        delete newErrors.email;
        delete newErrors.phone;
      }
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setErrorToastVisible(true);
      setTimeout(() => setErrorToastVisible(false), 3000);
      return;
    }

    const { data, error } = await supabase
      .from('Applications')
      .insert([formData])
      .select();

    if (error) {
      console.error('Error submitting to Supabase:', error);
      alert('Sorry, something went wrong. Please try again.');
    } else {
      setSuccessModalOpen(true);
      setErrors({});
    }
  };

  const closeModalAndReset = () => {
    setSuccessModalOpen(false);
    setFormData(initialFormData);
  };

  const inputClasses = (field) =>
    `w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all dark:bg-gray-700 dark:text-gray-100 placeholder:text-[#69140E]/40 dark:placeholder:text-white/40 ${
      errors[field]
        ? 'border-red-500 ring-red-300 dark:ring-red-400'
        : 'border-[#69140E]/20 dark:border-gray-600 focus:ring-[#F6AA1C]'
    }`;

  return (
    // ! Нова тема: Оновлений фон сторінки
    <div className="bg-[#69140E]/5 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-colors">
      <PageStyles />

      <div className="avoid-emoji w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg z-10">
        <div className="text-center mb-8">
          {/* ! Нова тема: Оновлені кольори тексту */}
          <h1 className="text-3xl font-bold text-[#69140E] dark:text-[#FFFFFF]">
            Trial Lesson Application
          </h1>
          <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-2">
            Fill out the form and our manager will contact you.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#69140E] dark:text-[#FFFFFF] mb-1"
                >
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Anna"
                  className={inputClasses('firstName')}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[#69140E] dark:text-[#FFFFFF] mb-1"
                >
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  className={inputClasses('lastName')}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="birthYear"
                  className="block text-sm font-medium text-[#69140E] dark:text-[#FFFFFF] mb-1"
                >
                  Year of birth*
                </label>
                <input
                  type="text"
                  id="birthYear"
                  name="birthYear"
                  value={formData.birthYear}
                  onChange={handleChange}
                  placeholder="1999"
                  className={inputClasses('birthYear')}
                />
                {errors.birthYear && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.birthYear}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="germanLevel"
                  className="block text-sm font-medium text-[#69140E] dark:text-[#FFFFFF] mb-1"
                >
                  German level*
                </label>
                <select
                  id="germanLevel"
                  name="germanLevel"
                  value={formData.germanLevel}
                  onChange={handleChange}
                  className={inputClasses('germanLevel')}
                >
                  <option value="" disabled>
                    Select your level...
                  </option>
                  <option value="A1">A1 - Beginner</option>
                  <option value="A2">A2 - Elementary</option>
                  <option value="B1">B1 - Intermediate</option>
                  <option value="B2">B2 - Upper intermediate</option>
                  <option value="C1">C1 - Advanced</option>
                  <option value="C2">C2 - Proficient</option>
                  <option value="unknown">I don't know my level</option>
                </select>
                {errors.germanLevel && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.germanLevel}
                  </p>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-[#69140E] dark:text-[#FFFFFF] mb-2">
                Provide at least one way to contact you*
              </p>
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={inputClasses('email')}
                  />
                  {errors.email && errors.email !== ' ' && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className={inputClasses('phone')}
                  />
                  {errors.phone && errors.phone !== ' ' && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="lessonFormat"
                className="block text-sm font-medium text-[#69140E] dark:text-[#FFFFFF] mb-1"
              >
                Lesson format*
              </label>
              <select
                id="lessonFormat"
                name="lessonFormat"
                value={formData.lessonFormat}
                onChange={handleChange}
                className={inputClasses('lessonFormat')}
              >
                <option value="" disabled>
                  Select a format...
                </option>
                <option value="single">Individual (Single)</option>
                <option value="dual">In a pair (Dual)</option>
              </select>
              {errors.lessonFormat && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lessonFormat}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="messenger"
                className="block text-sm font-medium text-[#69140E] dark:text-[#FFFFFF] mb-1"
              >
                Preferred messenger
              </label>
              <select
                id="messenger"
                name="messenger"
                value={formData.messenger}
                onChange={handleChange}
                className={inputClasses('messenger')}
              >
                <option value="">Not selected</option>
                <option value="telegram">Telegram</option>
                <option value="viber">Viber</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            <div className="text-center pt-4">
              {/* ! Нова тема: Оновлена кнопка відправки */}
              <button
                type="submit"
                className="w-full bg-[#FFD700] text-[#69140E] font-bold py-3 px-6 rounded-lg hover:bg-[#F6AA1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F6AA1C] transition-colors duration-300"
              >
                Submit application
              </button>
            </div>
          </div>
        </form>
      </div>

      <Modal isOpen={isSuccessModalOpen} onClose={closeModalAndReset}>
        <div className="text-center">
          {/* ! Нова тема: Оновлена іконка успіху */}
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
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl leading-6 font-bold text-[#69140E] dark:text-[#FFFFFF] mb-2">
            Great!
          </h3>
          <p className="text-[#69140E]/80 dark:text-[#FFFFFF]/80 mb-6">
            Your application has been sent successfully. We will contact you
            shortly.
          </p>
          {/* ! Нова тема: Оновлена кнопка закриття */}
          <button
            onClick={closeModalAndReset}
            className="w-full bg-[#E85F5C] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#d1504e] transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>

      <div
        className={`fixed bottom-5 right-5 bg-red-600 text-white py-3 px-6 rounded-lg shadow-xl transition-all duration-300 z-50 ${isErrorToastVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0 pointer-events-none'}`}
      >
        <p className="font-semibold">Please fill in the required fields!</p>
      </div>
    </div>
  );
}

export default ApplicationPage;
