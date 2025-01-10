import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom"
import './reset.scss'
import App from './App.jsx'
import SignUp from './pages/SignUp.jsx'
import Profil from './pages/Profil.jsx'
import ResetPage from './pages/ResetPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/ResetPage' element={<ResetPage />} />
        <Route path='/Profil' element={<Profil />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
