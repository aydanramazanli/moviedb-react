import { createContext, useReducer, useEffect, useState, useRef } from 'react';
import AppReducer from '../reducer/AppReducer';
import { getData } from '../api/api';

// initialState
const initialState = {
  wishList: []
};

// context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = (props) => {
  const [searchKey, setSearchKey] = useState();
  const [movieData, setMovieData] = useState([]);
  const prevController = useRef(null);
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishList));
  });

  const searchMovie = async (isInfinity = false, { page = 1 } = {}) => {
    if (searchKey === ' ') {
      return;
    }
    try {
      const controller = new AbortController();

      if (prevController.current) {
        prevController.current.abort();
      }
      prevController.current = controller;
      const searchData = await getData(searchKey, { abortSignal: controller.signal });
      if (isInfinity) {
        setMovieData([...searchData, ...searchData?.results?.filter(w => w?.media_type !== 'person' && w?.backdrop_path)]
        );
      } else {
        setMovieData(searchData?.results?.filter(w => w?.media_type !== 'person' && w?.backdrop_path));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovie();
  }, []);

  // actions
  const addMovieList = (movie) => {
    dispatch({ type: 'ADD_MOVIE', payload: movie });
  };

  const removeMovielist = (id) => {
    dispatch({ type: 'REMOVE_MOVIE', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{ wishList: state.wishList, addMovieList, removeMovielist, searchMovie, movieData, setSearchKey, searchKey }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
