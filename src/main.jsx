import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CheckoutForm from './assets/pages/CheckoutForm/CheckoutForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckoutForm  />
  </StrictMode>,
)
