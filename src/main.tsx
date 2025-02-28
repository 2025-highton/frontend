import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/router.tsx'

import './styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
