const actions = {
  GET_JOBS: 'GET_JOBS',
  GET_JOBS_SUCCESS: 'GET_JOBS_SUCCESS',
  GET_JOBS_FAILED: 'GET_JOBS_FAILED',

  GET_JOBS_DETAIL: 'GET_JOBS_DETAIL',
  GET_JOBS_DETAIL_SUCCESS: 'GET_JOBS_DETAIL_SUCCESS',
  GET_JOBS_DETAIL_FAILED: 'GET_JOBS_DETAIL_FAILED',

  getJobs: (filter, current, pageSize, type) => ({
    type: actions.GET_JOBS,
    payload: { filter, current, pageSize, type },
  }),
  getJobsSuccess: (data) => ({
    type: actions.GET_JOBS_SUCCESS,
    payload: data,
  }),
  getJobsFailure: (error) => ({
    type: actions.GET_JOBS_FAILED,
    payload: error,
  }),

  // Jobs detail actions
  getJobsDetail: (jobId) => ({
    type: actions.GET_JOBS_DETAIL,
    payload: { jobId },
  }),
  getJobsDetailSuccess: (data) => ({
    type: actions.GET_JOBS_DETAIL_SUCCESS,
    payload: data,
  }),
  getJobsDetailFailure: (error) => ({
    type: actions.GET_JOBS_DETAIL_FAILED,
    payload: error,
  }),
};
export default actions;
