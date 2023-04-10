import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getListJobs, getJobDetail } from '../../api/jobs';
import actions from './actions';

export function* getJobs(payload) {
  const { filter, current, pageSize, type } = payload.payload;


  try {
    const res = yield call(getListJobs, filter, current, pageSize, type);
    console.log(res);
    yield put({
      type: actions.GET_JOBS_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_JOBS_FAILED,
      payload: error,
    });
  }
}
export function* getJobDetail_Saga(payload) {
  const { jobId } = payload.payload;
  try {
    const res = yield call(getJobDetail, jobId);
    yield put({
      type: actions.GET_JOBS_DETAIL_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_JOBS_DETAIL_FAILED,
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(actions.GET_JOBS, getJobs)], [yield takeLatest(actions.GET_JOBS_DETAIL, getJobDetail_Saga)]);
}
