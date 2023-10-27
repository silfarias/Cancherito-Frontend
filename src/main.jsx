import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './routers/AppRouter.jsx';
import '../public/css/login.css'
import '../public/css/home.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
