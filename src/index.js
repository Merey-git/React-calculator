import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем createRoot вместо render
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Создаем корневой элемент с помощью createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Используем root.render для рендеринга компонента
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Вы можете оставить функцию reportWebVitals, если хотите отслеживать производительность
reportWebVitals();
