const actions = {
  GET_MATCH_JOBS: 'GET_MATCH_JOBS',
  GET_MATCH_JOBS_SUCCESS: 'GET_MATCH_JOBS_SUCCESS',
  GET_MATCH_JOBS_FAILED: 'GET_MATCH_JOBS_FAILED',

  GET_MATCH_JOBS_ONE: 'GET_MATCH_JOBS_ONE',
  GET_MATCH_JOBS_ONE_SUCCESS: 'GET_MATCH_JOBS_ONE_SUCCESS',
  GET_MATCH_JOBS_ONE_FAILED: 'GET_MATCH_JOBS_ONE_FAILED',

  GET_MATCH_HISTORY: 'GET_MATCH_HISTORY',
  GET_MATCH_HISTORY_SUCCESS: 'GET_MATCH_HISTORY_SUCCESS',
  GET_MATCH_HISTORY_FAILED: 'GET_MATCH_HISTORY_FAILED',

  GET_MATCH_MORE: 'GET_MATCH_MORE',
  GET_MATCH_MORE_SUCCESS: 'GET_MATCH_MORE_SUCCESS',
  GET_MATCH_MORE_FAILED: 'GET_MATCH_MORE_FAILED',

  POST_MATCH_HISTORY: 'POST_MATCH_HISTORY',
  POST_MATCH_HISTORY_SUCCESS: 'POST_MATCH_HISTORY_SUCCESS',
  POST_MATCH_HISTORY_FAILED: 'POST_MATCH_HISTORY_FAILED',

  UPDATE_MATCH_STATUS_REQUEST: 'UPDATE_MATCH_STATUS_REQUEST',
  UPDATE_MATCH_STATUS_SUCCESS: 'UPDATE_MATCH_STATUS_SUCCESS',
  UPDATE_MATCH_STATUS_FAILURE: 'UPDATE_MATCH_STATUS_FAILURE',

  // GET MATCH JOBS
  getJobMatch: (param, joinData, progress, search, page, pageSize) => ({
    type: actions.GET_MATCH_JOBS,
    payload: { param, joinData, progress, search, page, pageSize },
  }),
  getJobMatchSuccess: (data) => ({
    type: actions.GET_MATCH_JOBS_SUCCESS,
    payload: data,
  }),
  getJobMatchFailure: (error) => ({
    type: actions.GET_MATCH_JOBS_FAILED,
    payload: error,
  }),

  // GET MATCH JOBS ONE
  getJobMatchOne: (matchId) => ({
    type: actions.GET_MATCH_JOBS_ONE,
    payload: { matchId },
  }),
  getJobMatchOneSuccess: (data) => ({
    type: actions.GET_MATCH_JOBS_ONE_SUCCESS,
    payload: data,
  }),
  getJobMatchOneFailure: (error) => ({
    type: actions.GET_MATCH_JOBS_ONE_FAILED,
    payload: error,
  }),

  // GET MATCH HISTORY
  getMatchHistory: (param) => ({
    type: actions.GET_MATCH_HISTORY,
    payload: { param },
  }),
  getMatchHistorySuccess: (data) => ({
    type: actions.GET_MATCH_HISTORY_SUCCESS,
    payload: data,
  }),
  getMatchHistoryFailure: (error) => ({
    type: actions.GET_MATCH_HISTORY_FAILED,
    payload: error,
  }),

  // GET MATCH MORE
  getMatchMore: (param) => ({
    type: actions.GET_MATCH_MORE,
    payload: { param },
  }),
  getMatchMoreSuccess: (data) => ({
    type: actions.GET_MATCH_MORE_SUCCESS,
    payload: data,
  }),
  getMatchMoreFailure: (error) => ({
    type: actions.GET_MATCH_MORE_FAILED,
    payload: error,
  }),

  // POST MATCH HISTORY
  postMatchHistory: (matchCode, status) => ({
    type: actions.POST_MATCH_HISTORY,
    payload: { matchCode, status },
  }),
  postMatchHistorySuccess: (data) => ({
    type: actions.GET_MATCH_HISTORY_SUCCESS,
    payload: data,
  }),
  postMatchHistoryFailure: (error) => ({
    type: actions.GET_MATCH_HISTORY_FAILED,
    payload: error,
  }),

  // UPDATE MATCH STATUS
  updateMatchStatusRequest: (matchCode, status) => ({
    type: actions.UPDATE_MATCH_STATUS_REQUEST,
    payload: { matchCode, status },
  }),

  updateMatchStatusSuccess: (data) => ({
    type: actions.UPDATE_MATCH_STATUS_SUCCESS,
    payload: data,
  }),

  updateMatchStatusFailure: (error) => ({
    type: actions.UPDATE_MATCH_STATUS_FAILURE,
    payload: error,
  }),
};
export default actions;
