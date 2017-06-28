// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createLogger from 'redux-logger';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import rootReducer from './reducers';
import appConfig from '../config/main';


const sagaMiddleware = createSagaMiddleware();
const devtools = typeof window === 'object' && window.devToolsExtension ?
  window.devToolsExtension :
  (() => noop => noop);

export default function configureStore(initialState: Object, history) {

  // console.log('history', history);
  
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  if (appConfig.env !== 'production' && process.env.BROWSER) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;

  store.close = () => {
    store.dispatch(END);
  };

  if (typeof window === 'function') {
    const module: Object = window.module;
    if (appConfig.env === 'development' && (module).hot) {
      (module).hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(connectRouter(history)(nextRootReducer));
      });
    }
  }

  return store;
}