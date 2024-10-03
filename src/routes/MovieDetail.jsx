import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moviesArray from '../mocks/movies.json'

const MovieDetail = () => {
    const [movieData, setMovieData] = useState({})
    const { movieId } = useParams(null)

    useEffect(() => {
        setMovieData(moviesArray.find(movie => movie.id === +movieId))
    })

    return (
        <div style={{textAlign: 'center', marginTop: '5rem', fontSize: '2rem', fontWeight: 'bold'}}>Película: {movieData.title}</div>
    )
}

export default MovieDetail