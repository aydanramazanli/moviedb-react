import React from 'react'
import './_singleMovie.scss'
import {Link} from  'react-router-dom'

export default function SingleMovie({title, backdrop_path,vote_average}) {
  console.log()

  
  return (
    <div className="movie">
      <div className="movie-img">
        <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="background" />
        <h2>{title}</h2>
        <span>{vote_average}</span>
        </div>
      <div className='movie-footer'>   <Link to ='/detail'>Details</Link>
      <i className="fa-solid fa-heart-circle-plus"></i></div>
   
    </div>
  )
}
