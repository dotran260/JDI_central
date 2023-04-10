import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getMatch, getMatchOne, updateStatus, matchHistory, getMatchMore } from '../../api/match';
import actions from './actions';

export function* getMatchJobs(payload) {
  const { param, progress, search, page, pageSize, joinData } = payload.payload;

  const res = yield call(getMatch, param, joinData, search, progress, page, pageSize);
  try {
    yield put({
      type: actions.GET_MATCH_JOBS_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_MATCH_JOBS_FAILED,
      payload: error,
    });
  }
}

export function* getMatchJobsOne(payload) {
  const { matchId } = payload.payload;

  const res = yield call(getMatchOne, matchId);
  console.log(res);
  try {
    yield put({
      type: actions.GET_MATCH_JOBS_ONE_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_MATCH_JOBS_ONE_FAILED,
      payload: error,
    });
  }
}

export function* getMatchHistory(payload) {
  const { param } = payload.payload;
  const res = yield call(matchHistory, param);
  try {
    yield put({
      type: actions.GET_MATCH_HISTORY_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_MATCH_HISTORY_FAILED,
      payload: error,
    });
  }
}

export function* getMatchMore_Saga(payload) {
  const { param } = payload.payload;

  try {
    if (param) {
      const res = yield call(getMatchMore, param);
      yield put({
        type: actions.GET_MATCH_MORE_SUCCESS,
        payload: res,
      });
    }
  } catch (error) {
    yield put({
      type: actions.GET_MATCH_MORE_FAILED,
      payload: error,
    });
  }
}

export function* updateMatchStatus(action) {
  try {
    const { matchCode, status } = action.payload;
    const response = yield call(updateStatus, matchCode, status);
    yield yield put({
      type: actions.UPDATE_MATCH_STATUS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield yield put({
      type: actions.UPDATE_MATCH_STATUS_FAILURE,
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield all(
    [yield takeLatest(actions.GET_MATCH_JOBS, getMatchJobs)],
    [yield takeLatest(actions.GET_MATCH_HISTORY, getMatchHistory)],
    [yield takeLatest(actions.GET_MATCH_MORE, getMatchMore_Saga)],
    [yield takeLatest(actions.UPDATE_MATCH_STATUS_REQUEST, updateMatchStatus)]
    [yield takeLatest(actions.GET_MATCH_JOBS_ONE, getMatchJobsOne)]
  );
}
