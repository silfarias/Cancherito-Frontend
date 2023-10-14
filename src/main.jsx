import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { Register } from './components/Register.jsx'
import './login.css'
import { Login } from './components/Login.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
