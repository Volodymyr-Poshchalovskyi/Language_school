//* This file is the entry point of the React application.

import ReactDOM from 'react-dom/client';
import App from './App';

// ! It's responsible for rendering the main App component into the DOM.

// * Selects the root HTML element where the application will be mounted.
const root = ReactDOM.createRoot(document.getElementById('root'));

// * Renders the main App component inside the root element.
// ? The <React.StrictMode> wrapper is often used here to highlight potential problems in an application.
root.render(<App />);
