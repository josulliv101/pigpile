import React from 'react';
// import { BrowserRouter as router } from 'react-router';
import { ConnectedRouter as router } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import WrappedRedBox from './components/WrappedRedBox';

import App from './app';
import configureStore from './store';
import rootSaga from './sagas';
import ApiClient from '../utils/ApiClient';

const history = createBrowserHistory();
const apiClient = new ApiClient();
const store = configureStore(
  window.__INITIAL_STATE__,  // eslint-disable-line no-underscore-dangle
  history
);
const props = { store, router, history };

store.runSaga(rootSaga, apiClient);

ReactDOM.render(
  (<AppContainer errorReporter={WrappedRedBox}>
    <App {...props} />
  </AppContainer>),
  document.getElementById('app')
);

if (module && module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    ReactDOM.render((
      <AppContainer errorReporter={WrappedRedBox}>
        <NextApp {...props} />
      </AppContainer>
    ), document.getElementById('app'));
  });
}
