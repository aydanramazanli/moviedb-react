import './_search.scss';
import { GlobalContext } from '../../service/context/GlobalState';
import { useContext } from 'react';

const Search = () => {
  const { setSearchKey, searchMovie } = useContext(GlobalContext);
  return (
    <>
      <form className="search">
        <input
          type="text"
          placeholder="I'm looking for..."
          onChange={(e) => {
            searchMovie();
            setSearchKey(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default Search;
