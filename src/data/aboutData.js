// Content of the "About" page. Edit texts here, not in the components.

import {
  FaComments,
  FaLaptop,
  FaRoute,
  FaGraduationCap,
} from 'react-icons/fa';

export const aboutHeader = {
  eyebrow: 'Онлайн-школа німецької мови',
  titleStart: 'Про нашу',
  titleHighlight: 'школу',
  subtitle:
    'Дізнайтеся більше про нашу місію, цінності та підхід до навчання.',
  stats: [
    { value: '450+', label: 'студентів' },
    { value: '5200+', label: 'уроків на місяць' },
    { value: 'A1–C1', label: 'рівні навчання' },
  ],
};

export const mission = {
  title: 'Наша місія',
  text: 'Ми віримо, що навчання має бути доступним, цікавим та ефективним для кожного. Наша мета — створити середовище, де ви не боїтеся говорити німецькою з першого уроку, розкриваєте свій потенціал і досягаєте цілей: роботи, переїзду чи іспиту.',
  founderCaption: 'Засновниця та викладачка школи',
  bubbles: ['Ach so!', 'Na klar!', 'Ja, genau?'],
  button: { text: 'Записатися на пробний урок', href: '/application' },
};

export const approach = {
  title: 'Наш підхід',
  text: 'Ми поєднуємо живу розмовну практику з чіткою системою граматики. Жодних нудних лекцій: на кожному занятті ви говорите, граєте в рольові діалоги та отримуєте зворотний зв’язок одразу.',
  principles: [
    {
      Icon: FaComments,
      title: 'Говоримо з першого уроку',
      text: 'Щонайменше половину заняття говорите саме ви.',
      color: 'coral',
    },
    {
      Icon: FaLaptop,
      title: 'Інтерактивний онлайн-формат',
      text: 'Інтерактивна дошка, відео та ігрові вправи замість підручника.',
      color: 'gold',
    },
    {
      Icon: FaRoute,
      title: 'Персональний план',
      text: 'Програма під вашу ціль, темп і графік.',
      color: 'amber',
    },
    {
      Icon: FaGraduationCap,
      title: 'Підготовка до іспитів',
      text: 'Goethe-Zertifikat і Telc: формат, стратегія, пробні тести.',
      color: 'maroon',
    },
  ],
  buttons: [
    { text: 'Індивідуальні заняття', href: '/single-form', primary: true },
    { text: 'Заняття в парі', href: '/dual-form', primary: false },
  ],
};

export const reviews = {
  title: 'Що кажуть про нас',
  items: [
    {
      quote:
        'Через півроку занять я склала Goethe B1 з першої спроби. Найбільше подобається, що на уроках ми справді говоримо, а не тільки розбираємо граматику.',
      name: 'Олена Петренко',
      level: 'A2 → B1',
      goal: 'Підготовка до Goethe-Zertifikat',
      color: 'coral',
    },
    {
      quote:
        'Займаюся в парі з колегою. Гнучкий графік дозволяє поєднувати навчання з роботою, а діалоги на уроках допомогли мені впевнено пройти співбесіду німецькою.',
      name: 'Максим Іваненко',
      level: 'B1 → B2',
      goal: 'Німецька для роботи',
      color: 'gold',
    },
    {
      quote:
        'Починала з нуля перед переїздом. Викладачка дуже терпляча, пояснює просто і з гумором. Уже за три місяці я спокійно спілкуюся в магазинах і з лікарем.',
      name: 'Анна Ковальчук',
      level: '0 → A2',
      goal: 'Розмовна німецька для життя',
      color: 'amber',
    },
  ],
};

export const history = {
  title: 'Історія школи',
  text: 'Школа виросла з невеликого блогу про німецьку мову в соцмережах. Ідея була простою: показати, що німецьку можна вчити легко, весело й із результатом.',
  milestones: [
    {
      title: 'Ідея та перші відео',
      text: 'Короткі відео про живу німецьку набирають перших підписників.',
    },
    {
      title: 'Перші студенти',
      text: 'Запускаємо індивідуальні онлайн-заняття та формат навчання в парі.',
    },
    {
      title: 'Спільнота',
      text: 'Instagram, TikTok і Telegram об’єднують тих, хто вчить німецьку разом з нами.',
    },
    {
      title: 'Сьогодні',
      text: '450+ студентів і понад 5200 уроків щомісяця. І це лише початок.',
    },
  ],
};

// Brand palette used across the About page.
export const aboutColors = {
  gold: { bg: 'bg-[#FFD700]/15', text: 'text-[#B8860B] dark:text-[#FFD700]', solid: 'bg-[#FFD700] text-[#69140E]' },
  coral: { bg: 'bg-[#E85F5C]/15', text: 'text-[#E85F5C]', solid: 'bg-[#E85F5C] text-white' },
  amber: { bg: 'bg-[#F6AA1C]/15', text: 'text-[#C77F0B] dark:text-[#F6AA1C]', solid: 'bg-[#F6AA1C] text-[#69140E]' },
  maroon: { bg: 'bg-[#69140E]/10 dark:bg-white/10', text: 'text-[#69140E] dark:text-white', solid: 'bg-[#69140E] text-white' },
};
