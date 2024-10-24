import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moviesArray from '../mocks/movies.json'

const MovieDetail = () => {
    const [movieData, setMovieData] = useState(null)
    const { movieId } = useParams(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // setMovieData(moviesArray.find(movie => movie.id === +movieId))
        const url = `https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDQwNjYyOWVmMTFhMWIyMzBjM2E5NGU5ZGMzZTg4NCIsIm5iZiI6MTcyOTcxMjMwMS43MjMyMTYsInN1YiI6IjY3MTk0ZmM2MjdiZDU3ZDkxZjYyMzQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HbqiYqoJGno5Hj60ckpd5wT6t9vp8SW5GIkd2o8jcQk"
            }
        }
        
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setMovieData(json)
          console.log(json)
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }, [])

    return (
        <>
            { loading ? <p>Cargando...</p> :
            
            <div>
            <h2>{movieData.original_title}</h2>
            <h3>{movieData.tagline}</h3>
            <div className="genres">{movieData.genres.map(genre => genre.name).join(', ')}</div>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.original_title} />
            <p>descripción: {movieData.overview}</p>
            <div className="country">Pais: {movieData.origin_country}</div>
            <p>fecha de lanzamiento: {movieData.release_date}</p>
            <p>puntaje: {movieData.vote_average}</p>
            <p>duración: {Math.floor(movieData.runtime / 60)}:{movieData.runtime % 60}</p>
            </div>
            }
        </>
    )
}

export default MovieDetail