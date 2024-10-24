import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

const MoviesList = () => {
    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/trending/movie/week?language=es-ES'
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDQwNjYyOWVmMTFhMWIyMzBjM2E5NGU5ZGMzZTg4NCIsIm5iZiI6MTcyOTcxMjMwMS43MjMyMTYsInN1YiI6IjY3MTk0ZmM2MjdiZDU3ZDkxZjYyMzQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HbqiYqoJGno5Hj60ckpd5wT6t9vp8SW5GIkd2o8jcQk"
            }
        }
        fetch(url, options)
        .then(response => response.json())
        .then(response => {
            setMovies(response.results)
            console.log(response)
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))

    },[])

    return (
        <>
            { loading ? <p>Cargando...</p> :
                <div className='in-theaters-container'>
                    {
                        movies.map(({id, original_title, poster_path, release_date}) => {
                            return (
                                <Link key={id} to={`/movies/${id}`}>
                                    <Card title={original_title} poster={"https://image.tmdb.org/t/p/original/"+poster_path} release={release_date}/>
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

export default MoviesList