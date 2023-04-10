import actions from './actions';

const initialState = {
  isLoading: false,
  errorMessage: null,
  dataTask: {
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
  dataPayment: [
    {
      metadata: [
        {
          recordTotal: 0,
          pageCurrent: 1,
          recordPerPage: 10,
        },
      ],
      data: [],
    },
  ],
  dataPaymentDetail: {
    errCode: null,
    errDetail: null,
    result: {},
  },
};

const jobsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // GET LIST TASK
  switch (type) {
    case actions.GET_TASK_JOBS:
      return { ...state, isLoading: true };

    case actions.GET_TASK_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataTask: {
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

    case actions.GET_TASK_JOBS_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };

    // GET TASK PAYMENT
    case actions.GET_TASK_PAYMENT:
      return { ...state, isLoading: true };

    case actions.GET_TASK_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataPayment: [
          {
            metadata: [
              {
                recordTotal: payload[0].metadata.recordTotal,
                pageCurrent: payload[0].metadata.pageCurrent,
                recordPerPage: payload[0].metadata.recordPerPage,
              },
            ],
            data: payload[0].data,
          },
        ],
      };

    case actions.GET_TASK_PAYMENT_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };

    // GET TASK PAYMENT DETAIL
    case actions.GET_TASK_PAYMENT_DETAIL:
      return { ...state, isLoading: true };

    case actions.GET_TASK_PAYMENT_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataPaymentDetail: {
          errCode: null,
          errDetail: null,
          result: {
            ...payload.result,
          },
        },
      };

    case actions.GET_TASK_PAYMENT_DETAIL_FAILED:
      return { ...state, isLoading: false, errorMessage: payload };

    default:
      return state;
  }
};

export default jobsReducer;
