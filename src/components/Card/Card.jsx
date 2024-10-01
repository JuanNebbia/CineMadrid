import React from 'react'
import './Card.css'

const Card = ({ title, poster, release }) => {
  const releaseYear = release.slice(0, 4)
  return (
    <div className='card-container'>
      <div className="card-title-container">
        <h3 className='card-title'>{title}</h3>
        <p className='card-release-date'>({releaseYear})</p>
      </div>
      <div className="card-img-container">
        <img src={poster} alt={`imagen de ${title}`} />
      </div>
    </div>
  )
}

export default Card