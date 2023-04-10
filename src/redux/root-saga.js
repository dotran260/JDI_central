import { all } from 'redux-saga/effects';
import authSagas from '@iso/redux/auth/saga';
import invoicesSagas from '@iso/redux/invoice/saga';
import profileSaga from '@iso/redux/profile/saga';
import companySage from '@iso/redux/company/saga';
import jobsSaga from '@iso/redux/jobs/saga';
import freelanceSaga from '@iso/redux/freelance/saga';
import MatchSaga from '@iso/redux/match/saga';
import InterviewSaga from '@iso/redux/interview/saga';
import TasksSaga from '@iso/redux/tasks/saga';

export default function* rootSaga(getState) {
  yield all([authSagas(), invoicesSagas(), profileSaga(), companySage(), jobsSaga(), freelanceSaga(), MatchSaga(), InterviewSaga(), TasksSaga()]);
}
