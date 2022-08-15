import { createContext, useReducer, useEffect } from 'react';
import AppReducer from '../reducer/AppReducer';
// initialState
const initialState = {
  wishList: localStorage.getItem('wishList')
    ? JSON.parse(localStorage.getItem('wishList'))
    : []
};

// context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(state.wishList));
  });

  // actions
  const addMovieList = (movie) => {
    dispatch({ type: 'ADD_MOVIE', payload: movie });
  };

  const removeMovielist = (id) => {
    dispatch({ type: 'REMOVE_MOVIE', payload: id });
  };
  return (
    <GlobalContext.Provider
      value={{ wishList: state.wishList, addMovieList, removeMovielist }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
