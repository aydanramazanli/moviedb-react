import { useState, useEffect } from 'react'
import './_movieList.scss'
import SingleMovie from '../singleMovie/SingleMovie'
import Sdk from '../../api/SDK'

export default function MovieList() {
  const [datas, setDatas] = useState([])

  const sdk = new Sdk()

  const getData = async () => {
    const res = await sdk.getMovies()
  setDatas(res)
  }
 
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="list">
        {datas && datas.map((movie)=>{
          return  <SingleMovie key={movie.id} {...movie}/>
        })}
       
      </div>
    </div>
  )
}
