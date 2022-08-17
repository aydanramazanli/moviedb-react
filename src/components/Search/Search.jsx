import './_search.scss';
import { GlobalContext } from '../../service/context/GlobalState';
import { useContext } from 'react';

const Search = ({ searchMovie }) => {
  const { setSearchKey } = useContext(GlobalContext);
  return (
    <>
      <form className="search" onSubmit={searchMovie}>
        <input
          type="text"
          placeholder="I'm looking for..."
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
