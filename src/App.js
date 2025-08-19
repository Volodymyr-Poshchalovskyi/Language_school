// * The main application component, serving as the root of the React app.

import AppRouter from './routes/AppRouter';
import InitialLoader from './components/Animations/InitialLoader'; // Переконайтеся, що шлях правильний
import './App.css';

function App() {
  // Обгортаємо AppRouter у InitialLoader, щоб показати анімацію завантаження
  // при першому відвідуванні
  return (
    <InitialLoader>
      <AppRouter />
    </InitialLoader>
  );
}

// * The App component is exported as the default module.
export default App;