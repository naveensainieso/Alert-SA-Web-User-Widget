import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const el = document.getElementById('alertsa-user-menu');
if (el) {
  createRoot(el).render(<App />);
}
