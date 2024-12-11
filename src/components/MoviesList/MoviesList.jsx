import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

const MoviesList = () => {
    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = import.meta.env.VITE_LOCAL_BACK_URL + '/movies'
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        }
        fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setMovies(response.filter(item => item.poster !== null))
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))

    },[])

    return (
        <>
            { loading  ? <p>Cargando...</p> :
                (!movies || !movies.length) ? <p>No hay peliculas</p> :
                    <div className='in-theaters-container'>
                        {
                            movies.map(({id, title, poster, release}) => {
                                return (
                                    <Link key={id} to={`/movies/${id}`}>
                                        <Card title={title} poster={poster} release={release}/>
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