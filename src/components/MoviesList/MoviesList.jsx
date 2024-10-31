import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

const MoviesList = () => {
    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = import.meta.env.VITE_MOVIES_URL + '/list/8486508'
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: import.meta.env.VITE_MOVIES_API_KEY
            }
        }
        fetch(url, options)
        .then(response => response.json())
        .then(response => {
            setMovies(response.items.filter(item => item.poster_path !== null))
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