import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import {ReactBrowser, Routes, Router} from 'react-router-component'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/scss/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
