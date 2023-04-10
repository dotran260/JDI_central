import actions from './actions';

const initialState = {
  isLoading: false,
  errorMessage: null,
  dataInterview: {
    errCode: null,
    errDetail: null,
    result: {},
  },
};

const InterviewReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_INTERVIEW:
      return { ...state, isLoading: true };

    case actions.GET_INTERVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataInterview: {
          errCode: null,
          errDetail: null,
          result: payload.result,
        },
      };

    case actions.GET_INTERVIEW_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };

    default:
      return state;
  }
};

export default InterviewReducer;
