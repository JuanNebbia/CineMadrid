import React, { useEffect, useState } from 'react'
import moviesArray from '../../mocks/movies.json'
import Card from '../../components/Card/Card.jsx'
import './Home.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

const Home = () => {
    const [moviesInTheaters, setMoviesInTheaters] = useState([])
    const { user } = useAuth()

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
            {   user?.role === 'admin' &&
                <Link to="/new-movie">
                    <button>Nueva película</button>
                </Link>
            }
            <div className='in-theaters-container'>
                {
                    moviesInTheaters.map(({id, title, poster, release}) => {
                        return (
                            <Link to={`/movies/${id}`} key={id}>
                                <Card title={title} poster={poster} release={release}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home