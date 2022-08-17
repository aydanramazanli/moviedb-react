import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '579fa79d34e501aae2fefaae5e307ee0';

const movieRequests = {
  getTrendingMovies: `${baseURL}/trending/all/day?api_key=${apiKey}&language=en-US`,
  getDiscoverMovies: `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&with_networks=213`,
  getTopRatedMovies: `${baseURL}/movie/top_rated?api_key=${apiKey}&language=en-US`,
  getActionMovies: `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=28`,
  getComedyMovies: `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=35`,
  getHorrowMovies: `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=27`,
  getRomanceMovies: `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10749`,
  getDocumentariesMovies: `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=99`
};

export const getMovies = async () => {
  const [
    getTrending,
    getDiscover,
    getTopRated,
    getActionMovies,
    getComedyMovies,
    getHorrowMovies,
    getRomanceMovies,
    getDocumentariesMovies
  ] = await Promise.all([
    fetch(movieRequests.getTrendingMovies).then((res) => res.json()),
    fetch(movieRequests.getDiscoverMovies).then((res) => res.json()),
    fetch(movieRequests.getTopRatedMovies).then((res) => res.json()),
    fetch(movieRequests.getActionMovies).then((res) => res.json()),
    fetch(movieRequests.getComedyMovies).then((res) => res.json()),
    fetch(movieRequests.getHorrowMovies).then((res) => res.json()),
    fetch(movieRequests.getRomanceMovies).then((res) => res.json()),
    fetch(movieRequests.getDocumentariesMovies).then((res) => res.json())
  ]);

  return {
    getTrending,
    getDiscover,
    getTopRated,
    getActionMovies,
    getComedyMovies,
    getHorrowMovies,
    getRomanceMovies,
    getDocumentariesMovies
  };
};

export const getPost = async (id, mediaType) => {
  try {
    const req = await axios.get(
      `${baseURL}/${
        mediaType || 'movie'
      }/${id}?api_key=${apiKey}&language=en-US`
    );
    return req.data;
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (searchKey) => {
  try {
    const {
      data: { results }
    } = await axios.get(
      `${baseURL}/search/multi?api_key=${apiKey}&page=1&query=${searchKey}`
    );

    return results;
  } catch (e) {
    console.log(e);
  }
};

export default movieRequests;
