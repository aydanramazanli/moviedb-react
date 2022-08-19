import { useState, useEffect } from 'react';
import './_bannerList.scss';

import { Link } from 'react-router-dom';

export default function SimpleSlider ({ movies }) {
  const [movieInfo, setMovieInfo] = useState();
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    setMovieInfo(
      movies.results[Math.floor(Math.random() * movies.results.length)]
    );
  }, [movies]);

  if (!movieInfo) return <></>;

  return (
    <div
      className="banner-img"
      style={{
        backgroundImage: `url(${baseUrl}${
          movieInfo.backdrop_path || movieInfo.poster_path
        })`
      }}
    >
        <div className="overlay"></div>
        <div className="info">
        <h1>
        {movieInfo.title || movieInfo.name || movieInfo.original_name}
      </h1>
      <p >{movieInfo.overview.slice(0, 150) + '...'}</p>
      <div className="banner-detail">
        <Link
          to={`detail/${movieInfo.id}`}
          state={{ mediaType: movieInfo.media_type }}
        >
          <button> More info</button>
        </Link>
      </div>
        </div>
    </div>
  );
}
