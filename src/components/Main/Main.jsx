import React, { useEffect, useState } from 'react'
import moviesArray from '../../mocks/movies.json'
import Card from '../Card/Card.jsx'
import './Main.css'

const Main = () => {
    const [moviesInTheaters, setMoviesInTheaters] = useState([])

    useEffect(() => {
        setMoviesInTheaters(moviesArray.filter(movie => {
            const since = new Date(movie.inTheatersSince)
            const until = new Date(movie.inTheatersUntil)
            const today = new Date().getTime()
            return today > since && today < until
        }))
    }, [])

    return (
        <div className="main-container">
            <h2>Películas en cartelera</h2>
            <div className='in-theaters-container'>
                {
                    moviesInTheaters.map(({id, title, poster, release}) => {
                        return (
                            <Card key={id} title={title} poster={poster} release={release}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main