//* The main application component, serving as the root of the React app.

import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
  // ! This component's primary role is to render the routing logic for the entire application.
  // * It imports and renders the AppRouter component to manage different pages and views.
  return (
    <div>
      <AppRouter />
    </div>
  );
}

// * The App component is exported as the default module.
export default App;
