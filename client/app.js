// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Link, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import Button from 'material-ui/Button';

import { Layout } from './components';
import { MovieDetails, Movies, Foo, GithubUsers } from './containers';
import { getAllMovies } from './reducers/movies';
import { removeServerStyle } from '../utils/dom';

function createStyleManager() {
  return MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
      palette: createPalette({
        type: 'light',
      }),
    }),
  });
}

export const { styleManager, theme } = createStyleManager();

type Props = {
  context?: Object,
  location?: Object,
  store: Object,
  router: Function,
};

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  props: Props;

  componentDidMount() {
    removeServerStyle(document);
  }

  render() {
    const { store, router: Router, ...props } = this.props;
    // console.log('history', props.history);
    const layout = (
      <Layout>
        <Button onClick={() => store.dispatch(getAllMovies())}>foobar</Button>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/foo">foo</Link></li>
          <li><Link to="/movies">movies</Link></li>
          <li><Link to="/github-users">github users</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={() => <h4>welcome</h4>} />
          <Route path="/foo" component={Foo} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/github-users" component={GithubUsers} />
          
          {/*<Route component={() => <h4>no match</h4>} />*/}
        </Switch>
      </Layout>
    );

    return (
      <Provider store={store}>
        <Router {...props}>
          <MuiThemeProvider styleManager={styleManager} theme={theme}>
            {layout}
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;