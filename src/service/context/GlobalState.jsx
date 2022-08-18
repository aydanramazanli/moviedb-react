import { createContext, useReducer, useEffect, useState } from 'react';
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
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishList));
  });

  const searchMovies = async () => {
    const res = await getData(searchKey);
    setMovieData(res);
  };
  const searchMovie = (e) => {
    e.preventDefault();
    searchMovies(searchKey);
  };

  useEffect(() => {
    searchMovies();
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
      value={{ wishList: state.wishList, addMovieList, removeMovielist, searchMovies, movieData, setSearchKey, searchKey, searchMovie }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
