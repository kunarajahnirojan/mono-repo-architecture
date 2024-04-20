import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import { axios } from '@mono-repo-architecture/middlewares';

import {
  loadAlertsRequested,
  loadAlertsSuccess,
  loadAlertsFail,
  loadActivityLogsSuccess,
  loadActivityLogsFail,
  loadActivityLogsRequested,
} from './alertSlice';

function* loadAlertsEffect(action: {
  type: string;
  payload: {
    filters: any;
    perPage: number;
    page: number;
  };
}): Generator<any, void, any> {
  try {
    const response = yield call(axios.get, `alert/get-all`);

    yield put(loadAlertsSuccess(response.data));
  } catch (error: any) {
    yield put(loadAlertsFail(error.message));
  }
}

function* loadActivityLogsEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axios.get, `activity-log`);

    yield put(loadActivityLogsSuccess(data));
  } catch (error: any) {
    yield put(loadActivityLogsFail(error.message));
  }
}

export function* alertsSaga(): Generator<any, void, any> {
  yield takeEvery(loadAlertsRequested, loadAlertsEffect);
  yield takeLatest(loadActivityLogsRequested, loadActivityLogsEffect);
}
