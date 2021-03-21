import { takeLatest, put, call, delay } from 'redux-saga/effects';

import api from '../../api';

function apiGet() {
  return api.get('/v1/public/characters', {
    params: {
      ts: 1,
      apikey: 'cc03b22669ed677d6a12c38243213c74',
      hash: '6291aa6d5004b918afb7fcfac65a6afb',
      limit: 100,
      offset: 0
    }
  });
}

function apiSearch(name) {
  return (
    name !== '' &&
    api.get('/v1/public/characters', {
      params: {
        ts: 1,
        apikey: 'cc03b22669ed677d6a12c38243213c74',
        hash: '6291aa6d5004b918afb7fcfac65a6afb',
        limit: 100,
        offset: 0,
        nameStartsWith: name
      }
    })
  );
}

function* getCharacter() {
  try {
    const response = yield call(apiGet);

    yield delay(1000);
    yield put({
      type: 'SUCCESS_GET_CHARACTER',
      payload: { data: response.data.data.results }
    });
  } catch (err) {
  }
}

function apiGetId(id) {
  return api.get(`/v1/public/characters/${id}`, {
    params: {
      ts: 1,
      apikey: 'cc03b22669ed677d6a12c38243213c74',
      hash: '6291aa6d5004b918afb7fcfac65a6afb'
    }
  });
}

function apiGetComicsId(id) {
  return api.get(`/v1/public/characters/${id}/series`, {
    params: {
      ts: 1,
      apikey: 'cc03b22669ed677d6a12c38243213c74',
      hash: '6291aa6d5004b918afb7fcfac65a6afb'
    }
  });
}

function* getCharacterId(action) {
  try {
    const responseId = yield call(apiGetId, action.payload.id);
    const responseSerie = yield call(apiGetComicsId, action.payload.id);

    yield delay(1000);
    yield put({
      type: 'SUCCESS_GET_CHARACTER_ID',
      payload: {
        dataUser: responseId.data.data.results,
        dataSeries: responseSerie.data.data.results
      }
    });
  } catch (err) {
  }
}

function* searchCharacter(action) {
  try {
    const response = yield call(apiSearch, action.payload.name);

    yield put({
      type: 'SUCCESS_SEARCH_CHARACTER',
      payload: { data: response.data.data.results }
    });
  } catch (err) {
  }
}

export default function* root() {
  yield takeLatest('REQUEST_GET_CHARACTER', getCharacter);
  yield takeLatest('REQUEST_GET_CHARACTER_ID', getCharacterId);
  yield takeLatest('REQUEST_SEARCH_CHARACTER', searchCharacter);
}
