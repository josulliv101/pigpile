import { take, takeEvery, takeLatest, fork, cancel, call, put, cancelled, race, select } from 'redux-saga/effects'
import {isCached, fetchRequest, fetchSuccess, fetchFailure, fetchCached, fetchCancel} from '../reducers/api';
import {getAllMovies, getMovieDetails, getGithubUsers} from '../reducers/movies';

const actions = [getAllMovies, getMovieDetails, getGithubUsers];
const REQUEST_TYPE_GET = 'get';

function* apiWorker(client, { meta: { key, endPoint, reqType = REQUEST_TYPE_GET }}) {

  yield put(fetchRequest(key));

  try {

    const { cancelled, results } = yield race({
      results: call(client[reqType], endPoint),
      cancelled: take(fetchCancel)
    });
    
    console.log('race results', cancelled, results);
    yield cancelled ? cancel() : put(fetchSuccess(key, results));

  }

  catch(error) {
    console.log('catch error', error)
    yield put(fetchFailure(error))
  } 

  finally {
    console.log('finally')
    if (yield cancelled()) {
      console.log('fetch task cancelled', key);
    }
  }
}

export function* watchApi(apiClient) {
  yield takeLatest(actions, apiWorker, apiClient)
}
