import React from 'react';
import { connectAsyncWork } from '@josulliv101/connect-async-work';

import { getMovieDetails } from '../reducers/movies';


type Props = {
  id: string,
  movie: Object,
  loading: boolean,
};

@connectAsyncWork(
  {
    key: 'movie',
    keyReducer: (state, { match: { params: { id } } }) => `movie-${id}`,
    action: getMovieDetails,
  },
  ({ api }, { match: { params: { id } } }) => ({
    id,
    // movie: api[`movie-${id}`] || {},
    // cached: !!api[`movie-${id}`],
    // loading: api.loadState[`movie-${id}`] && api.loadState[`movie-${id}`].loading,
  }),
  {}
)
class MovieDetails extends React.Component {

  // Will bundle setState calls so it doesn't render twice
/*  componentWillMount() {
    const { id, cached, loading } = this.props;
    if (!cached && !loading) this.props.getMovieDetails(id);
  }*/

  componentWillUnmount() {
/*    const { id, loading } = this.props;
    if (loading) this.props.fetchCancel(`movie-${id}`);*/
    console.log('componentWillUnmount'); // eslint-disable-line no-console
  }

  props: Props;

  render() {
    const { id, movie = {} } = this.props;
    const { title, releaseYear, star, director, description } = movie;
    return (
      <div>
        <h2>Movie Details</h2>
        {this.props.loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {id}
            <h2>{title} <small style={{ fontWeight: 400 }}>({releaseYear})</small></h2>
            <p>starring {star}</p>
            <p>directed by {director}</p>
            <p>{description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetails;
