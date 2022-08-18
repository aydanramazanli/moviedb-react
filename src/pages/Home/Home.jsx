import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getAllMovies } from '../../service/api/api';
import './_home.scss';

export default function Home () {
  const [allMovies, setAllMovies] = useState();

  const homeMovies = async () => {
    const data = await getAllMovies();
    if (data) {
      setAllMovies(data);
    }
  };

  useEffect(() => {
    homeMovies();
  }, []);

  if (!allMovies) {
    return <>
   <div className="main">
      </div></>;
  }

  return (
      <>
        <div className="main">
          <MovieList title="Top Rating" movies={allMovies?.getTopRated}/>
          {/* <MovieList title="Actions" movies={allMovies?.getActionMovies}/>
          <MovieList title="Trending" movies={allMovies?.getTrending}/>
          <MovieList title="Discover" movies={allMovies?.getDiscover}/>
          <MovieList title="Comedy" movies={allMovies?.getComedyMovies}/>
          <MovieList title="Horrow" movies={allMovies?.getHorrowMovies}/>
          <MovieList title="Romance" movies={allMovies?.getRomanceMovies}/>
          <MovieList title="Documentary" movies={allMovies?.getDocumentariesMovies}/> */}
        </div>
      </>
  );
}
