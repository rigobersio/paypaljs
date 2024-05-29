import React from 'react'
import ReactDOM from 'react-dom/client'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>,
)
