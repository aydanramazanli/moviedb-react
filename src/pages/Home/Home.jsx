import { useContext } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { GlobalContext } from '../../service/context/GlobalState';
import './_home.scss';

export default function Home () {
  const { movieData } = useContext(GlobalContext);

  return (
    <>
      <div className="main">
        <MovieList movieData={movieData} />
      </div>
    </>
  );
}
