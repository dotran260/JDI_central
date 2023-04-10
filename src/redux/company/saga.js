import { all, takeEvery, put, call } from "redux-saga/effects";
import { getListCompany } from "../../api/company";
import actions from "./actions";

export function* getCompanies(payload) {
  try {
    const { page, limit } = payload.payload;
    const res = yield call(getListCompany, { page, limit });
    if (res && !res?.statusCode) {
      yield put({
        type: actions.GET_LIST_COMPANY_SUCCESS,
        payload: res,
      });
      return;
    }
    yield put({
      type: actions.GET_LIST_COMPANY_FAILURE,
      payload: res?.message,
    });
  } catch (error) {
    yield put({
      type: actions.GET_LIST_COMPANY_FAILURE,
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield all([yield takeEvery(actions.GET_LIST_COMPANY, getCompanies)]);
}
