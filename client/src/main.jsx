import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App  from './App.jsx'
import { Inicio } from './pages/Inicio.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Inicio />
  </StrictMode>
)
