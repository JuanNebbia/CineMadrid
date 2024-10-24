import React, { useEffect, useState } from 'react'
import moviesArray from '../../mocks/movies.json'
import Card from '../../components/Card/Card.jsx'
import './Home.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import MoviesList from '../../components/MoviesList/MoviesList.jsx'

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
            {   user?.role === 'admin' &&
                <Link to="/new-movie">
                    <button>Nueva película</button>
                </Link>
            }
            {/* <h2>Películas en cartelera</h2>
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
            </div> */}
            <MoviesList />
        </div>
    )
}

export default Home