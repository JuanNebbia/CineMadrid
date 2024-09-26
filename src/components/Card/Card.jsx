import React from 'react'

const Card = ({title, description, image}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={`imagen de ${title}`} />
    </div>
  )
}

export default Card