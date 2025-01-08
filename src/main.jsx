import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import SignUp from './pages/SignUp.jsx'
import Profil from './pages/Profil.jsx'
import Reset from './pages/Reset.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Reset' element={<Reset />} />
        <Route path='/Profil' element={<Profil />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
