import { all, put, call, takeLatest } from 'redux-saga/effects';
import { freelanceApi, freelanceDetailApi } from '../../api/freelancer';
import actions from './actions';

export function* getFreelancers({ payload }) {
  try {
    const res = yield call(freelanceApi.getAll, payload);
    yield put({
      type: actions.GET_LIST_FREELANCER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_LIST_FREELANCER_FAILURE,
      payload: error,
    });
  }
}

export function* getFreelancerDetail(payload) {
  const { userId } = payload.payload;

  const res = yield call(freelanceDetailApi, userId);

  try {
    yield put({
      type: actions.GET_FREELANCER_DETAIL_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_FREELANCER_DETAIL_FAILURE,
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(actions.GET_LIST_FREELANCER, getFreelancers)], [yield takeLatest(actions.GET_FREELANCER_DETAIL, getFreelancerDetail)]);
}
