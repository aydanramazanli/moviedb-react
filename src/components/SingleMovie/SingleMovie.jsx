import { useContext } from 'react';
import { GlobalContext } from '../../service/context/GlobalState';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './_singleMovie.scss';
import movieImage from '../../images/nomoviepic.jpg';

import { Link } from 'react-router-dom';

export default function SingleMovie ({ movie }) {
  const image =
    movie.backdrop_path === null || movie.poster_path === null
      ? movieImage
      : `https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`;
  const { addMovieList, wishList } = useContext(GlobalContext);
  const wishMovie = wishList.find((i) => i.id === movie.id);

  return (
    <div className="movie">
      <Link to={`/detail/${movie.id}`}>
        <div className="movie-img">
          <LazyLoadImage effect='blur' height="100%" width='100%' src={image} alt="background" loading="lazy" style={{ objectFit: 'cover' }}/>
        </div>
      </Link>
      <div className="movie-footer">
        <h2>{movie.title || movie.original_name || movie.original_title}</h2>
        <i
          className="fa-solid fa-heart-circle-plus"
          onClick={() => addMovieList(movie)}
          style={wishMovie ? { color: '#ff55a5' } : null}
        ></i>
      </div>

    </div>
  );
}