import React, { useEffect, useState } from 'react'
import moviesArray from '../../mocks/movies.json'
import Card from '../../components/Card/Card.jsx'
import './Home.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import MoviesList from '../../components/MoviesList/MoviesList.jsx'

const Home = () => {
    const { user } = useAuth()

    return (
        <div className="main-container">
            {   user?.role === 'admin' &&
                <Link to="/new-movie">
                    <button className='new-movie-btn'>Nueva película</button>
                </Link>
            }
            <MoviesList />
        </div>
    )
}

export default Home