import { useContext } from 'react';
import { GlobalContext } from '../../service/context/GlobalState';
import './_singleMovie.scss';

import { Link } from 'react-router-dom';

export default function SingleMovie ({ movie }) {
  const { addMovieList, wishList } = useContext(GlobalContext);
  const wishMovie = wishList.find(i => i.id === movie.id);

  return (
    <div className="movie">
      <Link to={`/detail/${movie.id}`}>
      <div className="movie-img">
        <img src={ `https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt="background" />
      </div>
      </Link>
      <div className="movie-footer">
        <h2>{movie.title || movie.original_name || movie.original_title}</h2>
        <i className="fa-solid fa-heart-circle-plus" onClick={() => addMovieList(movie)} style={ wishMovie ? { color: '#ff55a5' } : null}></i>

      </div>
    </div>
  );
}
