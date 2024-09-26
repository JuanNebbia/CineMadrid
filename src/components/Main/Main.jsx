import React from 'react'
import placesArray from '../../mocks/places.json'
import Card from '../Card/Card.jsx'

const Main = () => {
    return (
        <div>
            {
                placesArray.map(({id, title, description, image}) => {
                    return (
                        <Card key={id} title={title} description={description} image={image}/>
                    )
                })
            }
        </div>
    )
}

export default Main