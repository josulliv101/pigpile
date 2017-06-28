import { fork } from 'redux-saga/effects';
import { watchApi } from '@josulliv101/connect-async-work';

export default function* root(apiClient) {
  yield [
  	watchApi(apiClient),
  ];
}