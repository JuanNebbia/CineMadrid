import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'

const MovieDetail = () => {
    const [movieData, setMovieData] = useState(null)
    const { movieId } = useParams(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // setMovieData(moviesArray.find(movie => movie.id === +movieId))
        const url = `${import.meta.env.VITE_LOCAL_BACK_URL}/movies/${movieId}`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
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
            {  
               ( loading || !movieData) ? <p>Cargando...</p> :
            
                <div className='movie-detail-container'>
                    <h2>{movieData?.title}</h2>
                    <div className="movie-detail-inner">
                        <img src={new URL(movieData.poster, import.meta.url).href} alt={movieData?.title} />
                        <div className="detail-data">
                            <div className="genres">{movieData.genres.map(genre => genre).join(', ')}</div>
                            <p className='movie-detail-summary'>{movieData.summary}</p>
                            <p>fecha de lanzamiento: {movieData.release}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MovieDetail