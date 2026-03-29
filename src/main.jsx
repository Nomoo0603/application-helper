import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, ScrollRestoration } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollRestoration />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
