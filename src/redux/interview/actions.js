const actions = {
  GET_INTERVIEW: 'GET_INTERVIEW',
  GET_INTERVIEW_SUCCESS: 'GET_INTERVIEW_SUCCESS',
  GET_INTERVIEW_FAILED: 'GET_INTERVIEW_FAILED',

  GET_INTERVIEW_DETAIL: 'GET_INTERVIEW_DETAIL',
  GET_INTERVIEW_DETAIL_SUCCESS: 'GET_INTERVIEW_DETAIL_SUCCESS',
  GET_INTERVIEW_DETAIL_FAILED: 'GET_INTERVIEW_DETAIL_FAILED',

  UPDATE_INTERVIEW: 'UPDATE_INTERVIEW',
  UPDATE_INTERVIEW_SUCCESS: 'UPDATE_INTERVIEW_SUCCESS',
  UPDATE_INTERVIEW_FAILURE: 'UPDATE_INTERVIEW_FAILURE',

  getInterview: (matchId) => ({
    type: actions.GET_INTERVIEW,
    payload: { matchId },
  }),
  getInterviewSuccess: (data) => ({
    type: actions.GET_INTERVIEW_SUCCESS,
    payload: data,
  }),
  getInterviewFailure: (error) => ({
    type: actions.GET_INTERVIEW_FAILED,
    payload: error,
  }),

  getInterviewDetail: (matchId) => ({
    type: actions.GET_INTERVIEW_DETAIL,
    payload: { matchId },
  }),
  getInterviewDetailSuccess: (data) => ({
    type: actions.GET_INTERVIEW_DETAIL_SUCCESS,
    payload: data,
  }),
  getInterviewDetailFailure: (error) => ({
    type: actions.GET_INTERVIEW_DETAIL_FAILED,
    payload: error,
  }),

  updateInterview: (code, workList, meetLink) => ({
    type: actions.UPDATE_INTERVIEW,
    payload: { code, workList, meetLink },
  }),

  updateInterviewSuccess: (data) => ({
    type: actions.UPDATE_INTERVIEW_SUCCESS,
    payload: data,
  }),

  updateInterviewFailure: (error) => ({
    type: actions.UPDATE_INTERVIEW_FAILURE,
    payload: error,
  }),
};
export default actions;
