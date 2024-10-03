import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar-list'>
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/about">Acerca de Nosotros</Link></li>  
      </ul>
    </nav>
  )
}

export default Navbar 