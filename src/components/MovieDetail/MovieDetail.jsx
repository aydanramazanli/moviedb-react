// import { useEffect, useState } from 'react';
// import './_movieDetail.scss';
// import { useParams } from 'react-router-dom';
// import Sdk from '../../service/api/SDK';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import movieImage from '../../images/nomoviepic.jpg';

export default function MovieDetail () {
  // const sdk = new Sdk();
  // const [movie, setMovie] = useState();
  // const { id } = useParams();

  // const image =
  //   movie?.backdrop_path === null || movie?.poster_path === null
  //     ? movieImage
  //     : `https://image.tmdb.org/t/p/original/${
  //         movie?.backdrop_path || movie?.poster_path
  //       }`;
  // const detail = async () => {
  //   const movieDetail = await sdk.getPost(id);
  //   setMovie(movieDetail);
  // };

  // useEffect(() => {
  //   detail();
  // }, [detail]);

  // return (
  //   <div className="movieDetail">
  //     <div className="details">
  //       <div className="detail-img">
  //         <LazyLoadImage
  //           effect="blur"
  //           height="400px"
  //           src={image}
  //           alt="background"
  //           loading="lazy"
  //         />
  //       </div>
  //       <div className="detail-info">
  //         <h1>{movie?.title || movie?.original_title}</h1>
  //         <p>{movie?.overview}</p>
  //         <span>
  //           <i className="fa-solid fa-star"></i> {movie?.vote_average}
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // );
}
