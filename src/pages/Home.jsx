import React from 'react'
import Navbar from '../companents/Navbar/Navbar'
import Banner from '../companents/Banner'
import MovieList from '../companents/MovieList'
import Footer from '../companents/Footer'

export default function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <MovieList/>
        <Footer/>
    </>
  )
}
