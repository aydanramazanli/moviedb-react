import React from 'react'
import './_singleMovie.scss'
import {Link} from  'react-router-dom'

export default function SingleMovie() {
  return (
    <div className="movie">
      <div className="movie-img"><img src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/covers/cover.jpg" alt="" /></div>
      <div className='movie-footer'>   <Link to ='/detail'>Details</Link>
      <i class="fa-solid fa-heart-circle-plus"></i></div>
   
    </div>
  )
}
