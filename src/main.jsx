import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavContextProvider } from './context/NavContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <NavContextProvider>
    <App />
    </NavContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
