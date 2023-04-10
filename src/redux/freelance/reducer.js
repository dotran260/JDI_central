import actions from './actions';

const initState = {
  isLoading: false,
  errorMessage: '',
  search: '',
  freelancer: {
    statusCode: null,
    message: null,
    data: {
      data: [],
      metadata: [
        {
          recordTotal: 0,
          pageCurrent: 1,
          recordPerPage: 10,
        },
      ],
    },
  },
  freelancerDetail: {
    errCode: null,
    errDetail: null,
    result: {
      user: {},
    },
  },
};
export default function freelancerReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_LIST_FREELANCER:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case actions.GET_LIST_FREELANCER_SUCCESS:
      return {
        ...state,
        freelancer: payload,
        isLoading: false,
      };
    case actions.GET_LIST_FREELANCER_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };

    // GET FREELANCER DETAIL
    case actions.GET_FREELANCER_DETAIL:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case actions.GET_FREELANCER_DETAIL_SUCCESS:
      return {
        ...state,
        freelancerDetail: payload,
      };
    case actions.GET_FREELANCER_DETAIL_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
