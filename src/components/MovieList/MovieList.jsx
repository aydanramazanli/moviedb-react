import './_movieList.scss';
import SingleMovie from '../SingleMovie/SingleMovie';

export default function MovieList ({ movieData }) {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="list">
        { movieData &&
           movieData.map((movie) => {
             return <SingleMovie key={movie.id} movie={movie} />;
           })}
        ;
      </div>
    </div>
  );
}
