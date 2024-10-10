import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth()

  return (
    <header>
        <Link to="/home" className='main-title-link'><h1 className='main-title'>CINEMADRID</h1></Link>
        <Navbar />
        {
          location.pathname !== "/login" &&
          ( user ?
            <>
              <p className="welcome-tag">¡Hola {user.name}!</p>
              <button className='logout-btn' onClick={logout}>Salir</button> 
            </>:
            <button className='login-btn'>
              <Link to="/login">Iniciar Sesión</Link>
            </button>
          )
        }
    </header>
  )
}

export default Header