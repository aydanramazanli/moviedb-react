export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        wishList: [action.payload, ...state.wishList],
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        wishList: state.wishList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
