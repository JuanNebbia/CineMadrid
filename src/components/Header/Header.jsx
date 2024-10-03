import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/home" className='main-title-link'><h1 className='main-title'>CINEMADRID</h1></Link>
        <Navbar />
    </header>
  )
}

export default Header