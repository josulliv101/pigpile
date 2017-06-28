import { createAction, handleActions } from 'redux-actions';

export const getAllMovies = createAction('@pigpile/MOVIES_GET_ALL', undefined, () => ({ key: 'movies', endPoint: '/loadMovies/' }));
export const getMovieDetails = createAction('@pigpile/MOVIE_GET_DETAILS', undefined, (id, key) => ({ key, endPoint: `/loadMovieDetails/${id}` }));
export const getGithubUsers = createAction('@pigpile/GITHUB_USERS_GET_ALL', undefined, () => ({ key: 'githubUsers', endPoint: 'https://api.github.com/users' }));

/*import * as actions from '../actions/movies';

const initialState = {
  loading: false,
  movies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.MOVIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.MOVIES_SUCCESS: {
      return {
        movies: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
*/

export const isLoaded = (globalState) => {
  return globalState.api.loadState && 
    globalState.api.loadState.movies && 
    globalState.api.loadState.movies.loading;
}

export const getAll = (globalState) => globalState.api.movies || [];
export const isCached = (globalState) => globalState.api.loadState.movies;