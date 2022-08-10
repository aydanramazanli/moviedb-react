import React from 'react'
import './_movieList.scss'
import SingleMovie from'../singleMovie/SingleMovie'

export default function MovieList() {

  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="list">
      {[...new Array(6)].map((movie,index)=>{
        return  <SingleMovie key={index}/>
     
      })}
      </div>
     
    </div>
  )
}
