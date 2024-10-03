import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div style={{textAlign: 'center', fontSize: '2rem', marginTop: '5rem', fontWeight: 'bold'}}> 404 ¡Ups! no nada que ver aquí!</div>
        <Link to="/home" style={{textAlign: 'center', fontSize: '1rem', marginTop: '1rem', color: '#eee', display: 'block'}}>Volver al inicio</Link>
    </>
  )
}

export default NotFound