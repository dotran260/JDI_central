import actions from './actions';

const initialState = {
  isLoading: false,
  errorMessage: null,
  dataMatch: {
    errCode: null,
    errDetail: null,
    result: {
      data: [],
      metadata: {
        recordTotal: 0,
        pageCurrent: 1,
        recordPerPage: 10,
      },
    },
  },
  dataMatchOne: {
    errCode: null,
    errDetail: null,
    result: {
      match: {},
      user: {},
      job: {},
    },
  },
  dataMatchHistory: {
    errCode: null,
    errDetail: null,
    result: [],
  },
  dataMatchMore: {
    statusCode: null,
    message: null,
    data: {
      metadata: [
        {
          recordTotal: 0,
          pageCurrent: 1,
          recordPerPage: 10,
        },
      ],
      data: [],
    },
  },
};

const jobsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // GET MATCH JOBS
    case actions.GET_MATCH_JOBS:
      return { ...state, isLoading: true };

    case actions.GET_MATCH_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataMatch: {
          errCode: null,
          errDetail: null,
          result: {
            data: payload.result.data,
            metadata: {
              recordTotal: payload.result.metadata.recordTotal,
              pageCurrent: payload.result.metadata.pageCurrent,
              recordPerPage: payload.result.metadata.recordPerPage,
            },
          },
        },
      };

    case actions.GET_MATCH_JOBS_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };

    // GET MATCH JOBS ONE
    case actions.GET_MATCH_JOBS_ONE:
      return { ...state, isLoading: true };

    case actions.GET_MATCH_JOBS_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        dataMatchOne: {
          ...state.dataMatchOne,
          errCode: null,
          errDetail: null,
          result: payload.result,
        },
      };

    case actions.GET_MATCH_JOBS_ONE_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };

    // GET Match History
    case actions.GET_MATCH_HISTORY:
      return { ...state, isLoading: true };

    case actions.GET_MATCH_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataMatchHistory: {
          errCode: null,
          errDetail: null,
          result: [...payload.result],
        },
      };

    case actions.GET_MATCH_HISTORY_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };

    // GET MATCH MORE

    case actions.GET_MATCH_MORE:
      return { ...state, isLoading: true };

    case actions.GET_MATCH_MORE_SUCCESS: {
      return {
        ...state,
        dataMatchMore: payload,
      };
    }

    case actions.GET_MATCH_MORE_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };
    default:
      return state;
  }
};

export default jobsReducer;
