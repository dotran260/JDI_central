import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getListTasks, getTaskPayment, getDetailPayment } from '../../api/task';
import actions from './actions';

export function* getTaskJobs(payload) {
  const res = yield call(getListTasks);

  try {
    const filterHired = res.result.data.filter((item) => item.status === 'hired');

    const filteredRes = {
      ...res,
      result: {
        ...res.result,
        data: filterHired,
        metadata: res.result.metadata.slice(0, 1), 
      },
    };

    yield put({
      type: actions.GET_TASK_JOBS_SUCCESS,
      payload: filteredRes,
    });
  } catch (error) {
    yield put({
      type: actions.GET_TASK_JOBS_FAILED,
      payload: error,
    });
  }
}
export function* getHistoryPayment(payload) {
  const { param } = payload.payload;
  const res = yield call(getTaskPayment, param);
  try {
    yield put({
      type: actions.GET_TASK_PAYMENT_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_TASK_PAYMENT_FAILED,
      payload: error,
    });
  }
}

export function* getPaymentDetail(payload) {
  const { paymentId } = payload.payload;
  const res = yield call(getDetailPayment, paymentId);
  try {
    yield put({
      type: actions.GET_TASK_PAYMENT_DETAIL_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: actions.GET_TASK_PAYMENT_DETAIL_FAILED,
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield all(
    [yield takeLatest(actions.GET_TASK_JOBS, getTaskJobs)],
    [yield takeLatest(actions.GET_TASK_PAYMENT, getHistoryPayment)],
    [yield takeLatest(actions.GET_TASK_PAYMENT_DETAIL, getPaymentDetail)]
  );
}
