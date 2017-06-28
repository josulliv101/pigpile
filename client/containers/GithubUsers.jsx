import React from 'react';
import Avatar from 'material-ui/Avatar';

import withAsyncWork from '../HOCs/withAsyncWork';
import { getGithubUsers } from '../reducers/movies';


type Props = {
  githubUsers: Array<Object>,
  loading: boolean,
};

@withAsyncWork({ key: 'githubUsers', action: getGithubUsers },
  () => ({}), {}
)
class GithubUsers extends React.Component { // eslint-disable-line react/prefer-stateless-function

  props: Props;

  render() {
    const { githubUsers = [] } = this.props;
    return (
      <div>
        <h2>GithubUsers ({githubUsers.length})</h2>
        {this.props.loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {githubUsers.map(({ id, login, avatar_url: avatarUrl }) => ( // eslint-disable-line
              <Avatar key={id} alt={login} src={avatarUrl} style={{ width: 80, height: 80, margin: 12, display: 'inline-block' }} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default GithubUsers;
