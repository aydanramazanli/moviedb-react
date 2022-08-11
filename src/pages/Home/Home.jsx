import React from 'react'
import MovieList from '../../companents/MovieList/MovieList'
import Search from '../../companents/Search/Search'
import './_home.scss'





export default function Home() {

  return (
    <>
        <div className="main">
        <Search />
        <MovieList/>
        </div>
      
    </>
  )
}
