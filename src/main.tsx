import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GeistProvider } from '@geist-ui/core';
import './styles.css';
import './viewer.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeistProvider themeType={'dark'}>
      <App />
    </GeistProvider>
  </React.StrictMode>,
);
