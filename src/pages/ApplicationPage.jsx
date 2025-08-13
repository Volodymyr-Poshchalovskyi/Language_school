import React, { useState, useEffect } from 'react'; // 1. Імпортуємо useEffect
import { useLocation } from 'react-router-dom'; // 2. Імпортуємо useLocation
import { supabase } from '../supabaseClient';

// === Компонент стилів ===
const PageStyles = () => (
  <style>{`
    @keyframes scale-in {
      from { 
        transform: scale(0.95); 
        opacity: 0; 
      }
      to { 
        transform: scale(1); 
        opacity: 1; 
      }
    }
    .animate-scale-in {
      animation: scale-in 0.3s ease-out forwards;
    }
    .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.3); /* Напівпрозорий чорний */
      -webkit-backdrop-filter: blur(4px); /* Розмиття для Safari */
      backdrop-filter: blur(4px);         /* Стандартне розмиття */
    }
  `}</style>
);

// === Компонент модального вікна ===
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-scale-in"
      >
        {children}
      </div>
    </div>
  );
}

// === Основний компонент сторінки ===
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
  
  // 3. Отримуємо поточну локацію (URL)
  const location = useLocation();

  // 4. Ефект, який спрацьовує при завантаженні компонента
  useEffect(() => {
    // Створюємо об'єкт для роботи з параметрами URL
    const params = new URLSearchParams(location.search);
    // Отримуємо значення параметра 'format'
    const format = params.get('format');
    
    // Якщо параметр існує ('single' або 'dual'), оновлюємо стан форми
    if (format === 'single' || format === 'dual') {
      setFormData(prevState => ({
        ...prevState,
        lessonFormat: format
      }));
    }
  }, [location.search]); // Ефект спрацює щоразу, коли змінюється URL

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s-()]{7,15}$/;

    if (!formData.firstName) newErrors.firstName = "Вкажіть ваше ім'я";
    if (!formData.lastName) newErrors.lastName = "Вкажіть ваше прізвище";
    if (!formData.lessonFormat) newErrors.lessonFormat = "Оберіть формат";
    
    if (!formData.birthYear) {
      newErrors.birthYear = "Вкажіть ваш рік народження";
    } else if (isNaN(formData.birthYear) || formData.birthYear < 1930 || formData.birthYear > new Date().getFullYear() - 7) {
      newErrors.birthYear = "Вкажіть коректний рік";
    }
    if (!formData.germanLevel) newErrors.germanLevel = "Оберіть ваш рівень";


    if (!formData.email && !formData.phone) {
      newErrors.email = "Вкажіть email або номер телефону";
      newErrors.phone = " "; 
    } else {
      if (formData.email && !emailRegex.test(formData.email)) {
        newErrors.email = "Некоректний формат email";
      }
      if (formData.phone && !phoneRegex.test(formData.phone)) {
        newErrors.phone = "Некоректний формат номеру";
      }
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    
    if (errors[name]) {
        const newErrors = { ...errors };
        delete newErrors[name];
        if ((name === 'email' || name === 'phone') && (errors.email?.includes('Вкажіть') || errors.phone === ' ')) {
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
    .insert([
      { 
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        lessonFormat: formData.lessonFormat,
        messenger: formData.messenger,
        birthYear: formData.birthYear,
        germanLevel: formData.germanLevel,
      }
    ])
    .select();

  if (error) {
    console.error('Помилка при відправці в Supabase:', error);
    alert('На жаль, сталася помилка. Спробуйте, будь ласка, ще раз.');
  } else {
    console.log('Дані успішно відправлено:', data);
    setSuccessModalOpen(true);
    setErrors({});
  }
};

  const closeModalAndReset = () => {
    setSuccessModalOpen(false);
    setFormData(initialFormData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <PageStyles />
      
      {/* --- КЛАС ДОДАНО ТУТ --- */}
      <div className="avoid-emoji w-full max-w-lg bg-white p-8 rounded-xl shadow-lg z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Заявка на пробний урок</h1>
          <p className="text-gray-500 mt-2">Заповніть форму, і наш менеджер зв'яжеться з вами.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Ім'я*</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Анна"
                  className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${errors.firstName ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`} />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Прізвище*</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Коваленко"
                  className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${errors.lastName ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`} />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700 mb-1">Рік народження*</label>
                <input type="number" id="birthYear" name="birthYear" value={formData.birthYear} onChange={handleChange} placeholder="1999"
                  className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${errors.birthYear ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`} />
                {errors.birthYear && <p className="text-red-500 text-xs mt-1">{errors.birthYear}</p>}
              </div>
              <div>
                <label htmlFor="germanLevel" className="block text-sm font-medium text-gray-700 mb-1">Рівень німецької*</label>
                <select id="germanLevel" name="germanLevel" value={formData.germanLevel} onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${errors.germanLevel ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`}>
                  <option value="" disabled>Оберіть ваш рівень...</option>
                  <option value="A1">A1 - Початківець</option>
                  <option value="A2">A2 - Елементарний</option>
                  <option value="B1">B1 - Середній</option>
                  <option value="B2">B2 - Вище середнього</option>
                  <option value="C1">C1 - Просунутий</option>
                  <option value="C2">C2 - Рівень носія</option>
                  <option value="unknown">Не знаю свій рівень</option>
                </select>
                {errors.germanLevel && <p className="text-red-500 text-xs mt-1">{errors.germanLevel}</p>}
              </div>
            </div>

            <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Вкажіть принаймні один спосіб для зв'язку*</p>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Електронна пошта</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Електронна пошта"
                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`} />
                        {errors.email && errors.email !== ' ' && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="sr-only">Номер телефону</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Номер телефону"
                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`} />
                        {errors.phone && errors.phone !== ' ' && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                </div>
            </div>

            <div>
              <label htmlFor="lessonFormat" className="block text-sm font-medium text-gray-700 mb-1">Форма навчання*</label>
              <select id="lessonFormat" name="lessonFormat" value={formData.lessonFormat} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${errors.lessonFormat ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`}>
                <option value="" disabled>Оберіть формат...</option>
                <option value="single">Індивідуальний (Single)</option>
                <option value="dual">В парі (Dual)</option>
              </select>
              {errors.lessonFormat && <p className="text-red-500 text-xs mt-1">{errors.lessonFormat}</p>}
            </div>
            <div>
              <label htmlFor="messenger" className="block text-sm font-medium text-gray-700 mb-1">Бажаний месенджер для зв'язку</label>
              <select id="messenger" name="messenger" value={formData.messenger} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Не обрано</option>
                <option value="telegram">Telegram</option>
                <option value="viber">Viber</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
                Відправити заявку
              </button>
            </div>
          </div>
        </form>
      </div>

      <Modal isOpen={isSuccessModalOpen} onClose={closeModalAndReset}>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-2">Чудово!</h3>
          <p className="text-gray-600 mb-6">Вашу заявку успішно відправлено. Ми зв'яжемося з вами найближчим часом.</p>
          <button onClick={closeModalAndReset} className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            Закрити
          </button>
        </div>
      </Modal>

      <div className={`fixed bottom-5 right-5 bg-red-600 text-white py-3 px-6 rounded-lg shadow-xl transition-all duration-300 z-50 ${isErrorToastVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0 pointer-events-none'}`}>
        <p className="font-semibold">Будь ласка, заповніть обов'язкові поля!</p>
      </div>
    </div>
  );
}

export default ApplicationPage;
