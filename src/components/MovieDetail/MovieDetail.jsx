import { useEffect, useState } from 'react';
import './_movieDetail.scss';
import { useParams } from 'react-router-dom';
import Sdk from '../../service/api/SDK';

export default function MovieDetail () {
  const sdk = new Sdk();
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const detail = async () => {
    const movieDetail = await sdk.getPost(id);

    setMovie(movieDetail);
  };

  useEffect(() => {
    detail();
  }, [detail]);

  return (
    <div className="movieDetail">
      <div className="details">
        <div className="detail-img">

          <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="" />
        </div>
        <div className="detail-info">
          <h1>{movie?.title || movie?.original_title }</h1>
          <p>
           {movie?.overview}
          </p>
          <span>
            <i className="fa-solid fa-star"></i> {movie?.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}
