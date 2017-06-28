import React from 'react';
import { Link } from 'react-router-dom';

import withAsyncWork from '../HOCs/withAsyncWork';
import { getAllMovies } from '../reducers/movies';
import img from './tshirt.png';

type Props = {
  movies: Array<Object>,
  loading: boolean,
};

@withAsyncWork({ key: 'movies', action: getAllMovies },
  () => ({}), {}
)
class Movies extends React.Component { // eslint-disable-line react/prefer-stateless-function

  props: Props;

  render() {
    const { movies = [] } = this.props;
    return (
      <div>
        <h2>Movies</h2>
        {this.props.loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {movies.map(({ id, title, releaseYear }) => (
              <li key={id}>
                <Link to={`/movie/${id}`}>
                  {title} ({releaseYear})
                </Link>
              </li>
            ))}
          </ul>
        )}
        <img src={img} alt="tshirt" />
      </div>
    );
  }
}

export default Movies;
