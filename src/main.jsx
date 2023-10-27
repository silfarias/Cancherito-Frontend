import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './routers/AppRouter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
