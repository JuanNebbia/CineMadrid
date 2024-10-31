import React, { useState } from 'react'
import './NewMovieForm.css'
import Card from '../../components/Card/Card'


const NewMovieForm = () => {
  const [movies, setMovies] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = import.meta.env.VITE_MOVIES_URL + '/search/movie?query=' + e.target.title.value + '&language=es-ES'
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
        console.log(response)
        setMovies(response.results.filter(item => item.poster_path !== null))
      })
  }

  const addMovie = (id) => {
    const url = `${import.meta.env.VITE_MOVIES_URL}/list/${import.meta.env.VITE_MOVIES_LIST_ID}/add_item`
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: import.meta.env.VITE_MOVIES_API_KEY
      },
      body: JSON.stringify({
        "media_id": id
      })
    }
    fetch(url, options) 
      .then((response) => {
        if(response.status === 201) {
          alert('Se agregó correctamente')
        }
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h1 className='new-movie-title'>Agregar películas</h1>
      <form action="" onSubmit={handleSubmit} className='new-movie-form'>
        <input type="text" name='title' placeholder='Escribe el nombre de una pelicula...' className='new-movie-input' />
        <button type='submit'>Buscar</button>
      </form>
      {
        movies.length > 0 &&
        <>
          <h2 className='new-movie-subtitle'>Resultados</h2>
          <div className='new-movie-results'>
            {
              movies.map(({id, original_title, poster_path, release_date}) => {
                return (
                  <div onDoubleClick={() => {addMovie(id)}} key={id}>
                    <Card title={original_title} poster={"https://image.tmdb.org/t/p/original/"+poster_path} release={release_date}/>
                  </div>
                )
              })
            }
          </div>
        </>
      }
    </div>
  )
}

export default NewMovieForm