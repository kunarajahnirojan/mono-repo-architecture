// src/store/rootSaga.ts
import { all } from 'redux-saga/effects';

import { authSaga } from '../features/auth/sagas';
import { alertsSaga } from '../features/alerts/sagas';

export function* rootSaga() {
  yield all([authSaga(), alertsSaga()]);
}
