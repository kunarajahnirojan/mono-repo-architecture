import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { authURL } from '@mono-repo-architecture/config';

import { loginRequested, loginSuccess, loginFailure } from './authSlice';

function* loginSaga(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axios.post, `${authURL}`, action.payload);
    yield put(loginSuccess(data));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* authSaga(): Generator<any, void, any> {
  yield takeLatest(loginRequested, loginSaga);
}
