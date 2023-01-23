import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Welcome } from './pages/welcome';
import ErrorBoundary from './components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ErrorBoundary><Welcome/></ErrorBoundary>
    <App />
  </React.StrictMode>
);
