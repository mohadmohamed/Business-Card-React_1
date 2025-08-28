import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Mainn from './Mainn.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header />
      <Mainn />
      <Footer/>
    </>
  
  </StrictMode>,
)

