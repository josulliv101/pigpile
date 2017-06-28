import { fork } from 'redux-saga/effects';

import { watchApi } from './api';
import { moviesSaga } from './movies';

export default function* root(apiClient) {
  yield [
  	watchApi(apiClient),
    // fork(moviesSaga),
  ];
}