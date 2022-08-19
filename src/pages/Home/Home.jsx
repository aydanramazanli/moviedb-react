import { useState, useEffect, useContext } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import BannerList from '../../components/BannerList/BannerList';
import { getAllMovies } from '../../service/api/api';
import { GlobalContext } from '../../service/context/GlobalState';
import Search from '../../components/Search/Search';
import SearchedMovies from '../../components/SearchedMovies/SearchedMovies';
import './_home.scss';

export default function Home () {
  const [allMovies, setAllMovies] = useState();
  const { searchKey, movieData } = useContext(GlobalContext);

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
    return (
      <>
        <div className="main"></div>
      </>
    );
  }

  return (

    <div className="main">
      <Search />
      {searchKey === ' ' || searchKey === undefined
        ? (
        <>
          <BannerList movies={allMovies?.getTopRated} />
          <MovieList title="Top Rating" movies={allMovies?.getTopRated} />
          <MovieList title="Actions" movies={allMovies?.getActionMovies} />
          <MovieList title="Trending" movies={allMovies?.getTrending} />
          <MovieList title="Discover" movies={allMovies?.getDiscover} />
          <MovieList title="Comedy" movies={allMovies?.getComedyMovies} />
          <MovieList title="Horrow" movies={allMovies?.getHorrowMovies} />
          <MovieList title="Romance" movies={allMovies?.getRomanceMovies} />
          <MovieList
            title="Documentary"
            movies={allMovies?.getDocumentariesMovies}
          />
        </>
          )
        : null}

      {searchKey !== '' && movieData !== undefined && movieData.length > 0
        ? (
            <div className="searchedMovies">
              {movieData.map((sd) => {
                return <SearchedMovies key={sd.id} movie={sd}/>;
              })}
            </div>

          )
        : null}
    </div>
  );
}
