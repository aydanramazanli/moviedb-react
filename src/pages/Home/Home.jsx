import { useState, useEffect } from 'react'
import MovieList from '../../companents/MovieList/MovieList'
import Search from '../../companents/Search/Search'
import './_home.scss'
import axios from 'axios'


export default function Home() {
  const api = 'https://api.themoviedb.org/3'
  const api_key = '579fa79d34e501aae2fefaae5e307ee0'
  const [searchKey, setSearchKey] = useState()
  const [datas, setDatas] = useState([])

  const data = async (searchKey) => {
    const type = searchKey ? 'search' : 'discover'
    const {
      data: { results },
    } = await axios.get(`${api}/${type}/movie`, {
      params: {
        api_key: api_key,
        query: searchKey,
      },
    })

    setDatas(results)
  }

  useEffect(() => {
    data()
  }, [])

  const searchMovie = (e) => {
    e.preventDefault()
    data(searchKey)
  }
  return (
    <>
      <div className="main">
        <Search searchMovie={searchMovie} setSearchKey={setSearchKey} />
        <MovieList datas={datas} />
      </div>
    </>
  )
}
