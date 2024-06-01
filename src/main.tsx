import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ThemeContext from './Context/ThemeContext.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContext>
      {' '}
      <App />
    </ThemeContext>
  </React.StrictMode>
);
