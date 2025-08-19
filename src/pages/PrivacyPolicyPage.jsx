import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* ! ЗМІНА ТУТ: Класи 'prose' видалено і стилі застосовано напряму до кожного елемента */}
        <div className="avoid-emoji">
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#69140E] dark:text-[#FFFFFF] text-center sm:text-left">Політика конфіденційності</h1>
          <p className="text-lg text-[#69140E]/60 dark:text-[#FFFFFF]/60 text-center sm:text-left mt-4">Останнє оновлення: 19 серпня 2025 р.</p>
          
          <h2 className="text-3xl font-semibold mt-12 text-[#69140E] dark:text-[#FFFFFF]">1. Загальні положення</h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            Цей документ описує політику конфіденційності (далі – Політика) для веб-сайту мовної школи "Besondres Deutch". 
            Ми з повагою ставимося до вашої приватності та прагнемо захищати ваші персональні дані відповідно до Закону України “Про захист персональних даних”.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">2. Збір та використання персональних даних</h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">Персональні дані</strong> – це будь-яка інформація, що дозволяє ідентифікувати фізичну особу. Ми збираємо дані, які ви свідомо надаєте нам при заповненні форм на Сайті (ім'я, номер телефону, email).
          </p>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
             Заповнюючи форму, ви <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">надаєте згоду на обробку</strong> цих даних з метою обробки вашої заявки, зворотного зв'язку та інформування про наші послуги.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">3. Файли Cookie</h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            Ми використовуємо <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">файли cookie</strong> та аналітичні сервіси (наприклад, Google Analytics) для збору знеособленої статистики, що допомагає нам покращувати Сайт. Ця інформація не пов’язана з вами особисто.
          </p>
          
          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">4. Зберігання та захист даних</h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            Ми зберігаємо ваші дані лише стільки часу, скільки це необхідно, та вживаємо належних заходів для їх захисту від несанкціонованого доступу.
          </p>
          
          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">5. Ваші права</h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            Ви маєте право на доступ до своїх даних, їх виправлення, видалення, а також можете відкликати свою згоду на їх обробку. Для реалізації цих прав, будь ласка, зв'яжіться з нами.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">6. Розкриття інформації третім особам</h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            Ми гарантуємо, що <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">не передаємо ваші персональні дані третім особам</strong>, за винятком випадків, передбачених законодавством України.
          </p>
          
          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">7. Зміни та згода</h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            Ми можемо оновлювати цю Політику, публікуючи зміни на цій сторінці. <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">Користуючись Сайтом, ви підтверджуєте свою згоду з її умовами.</strong>
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">8. Контактна інформація</h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            Якщо у вас виникли питання, ви можете зв'язатися з нами, скориставшись <Link to="/application" className="text-[#E85F5C] hover:underline">контактною формою</Link> на сайті.
          </p>
        </div>
      </div>
    </div>
  );
}