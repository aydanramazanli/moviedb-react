import { useState, useEffect, useContext } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import BannerList from '../../components/BannerList/BannerList';
import { getAllMovies } from '../../service/api/api';
import { GlobalContext } from '../../service/context/GlobalState';
import Search from '../../components/Search/Search';
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
        <section className="w-full carousel" id="row">
          <div className="mt-[70px]">
            <div className="mb-5 border-b border-solid border-[#444] mx-2 pb-5 text-left">
              <h2 className="text-2xl font-bold text-white">Search Result</h2>
            </div>
            <div className="relative grid lg:grid-cols-5">
              {movieData.map((sd) => {
                return <h1 key={sd.id}>{sd.title}</h1>;
              })}
            </div>
          </div>
        </section>
          )
        : null}
    </div>
  );
}
