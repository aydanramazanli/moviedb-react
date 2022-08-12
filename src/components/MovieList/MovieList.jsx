import './_movieList.scss';
import SingleMovie from '../SingleMovie/SingleMovie';

export default function MovieList ({ datas }) {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="list">
        {datas &&
          datas.map((movie, id) => {
            return <SingleMovie key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
}
