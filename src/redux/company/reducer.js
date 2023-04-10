import actions from "./actions";

const initState = {
  isLoading: false,
  errorMessage: "",
  company: {
    data: [],
    metadata: {
      recordTotal: 0,
      pageCurrent: 1,
      recordPerPage: 10,
    },
  },
};

export default function companyReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.GET_LIST_COMPANY:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case actions.GET_LIST_COMPANY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    case actions.GET_LIST_COMPANY_SUCCESS:
      return {
        ...state,
        company: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
