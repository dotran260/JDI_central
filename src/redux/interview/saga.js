import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getInterviews } from '../../api/jobs';
import actions from './actions';

export function* getInterview(payload) {
  const { matchId } = payload.payload;
  const res = yield call(getInterviews, matchId);
  console.log(res);

  try {
    yield put({
      type: actions.GET_INTERVIEW_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_INTERVIEW_FAILED,
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(actions.GET_INTERVIEW, getInterview)]);
}
