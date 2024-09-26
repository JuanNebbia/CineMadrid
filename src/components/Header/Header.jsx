import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header>
        <h1 className='main-title'>Turismo La Madrid</h1>
        <Navbar />
    </header>
  )
}

export default Header