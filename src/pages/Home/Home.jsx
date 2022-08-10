import React from 'react'
import Navbar from '../../companents/Navbar/Navbar'
import MovieList from '../../companents/MovieList/MovieList'
import Search from '../../companents/Search/Search'
import Footer from '../../companents/footer/Footer'
import './_home.scss'

export default function Home() {
  return (
    <>
        <Navbar/>
        <div className="main">
        <Search />
        <MovieList/>
        </div>
        <Footer/>
    </>
  )
}
