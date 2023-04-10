import actions from './actions';

const initialState = {
  isLoading: false,
  errorMessage: null,
  jobs: {
    data: [],
    metadata: [
      {
        recordTotal: 0,
        pageCurrent: 1,
        recordPerPage: 10,
      },
    ],
  },
  jobsDetail: {},
};

const jobsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_JOBS:
      return { ...state, isLoading: true };
    case actions.GET_JOBS_SUCCESS:
      return { ...state, isLoading: false, jobs: { ...state.jobs, ...payload } };
    case actions.GET_JOBS_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };

    case actions.GET_JOBS_DETAIL:
      return { ...state, isLoading: true };
    case actions.GET_JOBS_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        jobsDetail: payload,
      };
    case actions.GET_JOBS_DETAIL_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };
    default:
      return state;
  }
};

export default jobsReducer;
