import './_movieList.scss'
import SingleMovie from '../singleMovie/SingleMovie'
import {Link} from 'react-router-dom'


export default function MovieList({datas}) {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="list">
        {datas && datas.map((movie)=>{
          return <Link to={`/detail/${movie.id}`}><SingleMovie key={movie.id} {...movie}/></Link> 
        })}
       
      </div>
    </div>
  )
}
