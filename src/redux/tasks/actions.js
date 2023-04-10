const actions = {
  GET_TASK_JOBS: 'GET_TASK_JOBS',
  GET_TASK_JOBS_SUCCESS: 'GET_TASK_JOBS_SUCCESS',
  GET_TASK_JOBS_FAILED: 'GET_TASK_JOBS_FAILED',

  GET_TASK_PAYMENT: 'GET_TASK_PAYMENT',
  GET_TASK_PAYMENT_SUCCESS: 'GET_TASK_PAYMENT_SUCCESS',
  GET_TASK_PAYMENT_FAILED: 'GET_TASK_PAYMENT_FAILED',

  GET_TASK_PAYMENT_DETAIL: 'GET_TASK_PAYMENT_DETAIL',
  GET_TASK_PAYMENT_DETAIL_SUCCESS: 'GET_TASK_PAYMENT_DETAIL_SUCCESS',
  GET_TASK_PAYMENT_DETAIL_FAILED: 'GET_TASK_PAYMENT_DETAIL_FAILED',

  UPDATE_TASK_PAYMENT: 'UPDATE_TASK_PAYMENT',
  UPDATE_TASK_PAYMENT_SUCCESS: 'UPDATE_TASK_PAYMENT_SUCCESS',
  UPDATE_TASK_PAYMENT_FAILED: 'UPDATE_TASK_PAYMENT_FAILED',
  // GET TASK JOBS
  getJobTask: (param) => ({
    type: actions.GET_TASK_JOBS,
    payload: { param },
  }),
  getJobTaskSuccess: (data) => ({
    type: actions.GET_TASK_JOBS_SUCCESS,
    payload: data,
  }),
  getJobTaskFailure: (error) => ({
    type: actions.GET_TASK_JOBS_FAILED,
    payload: error,
  }),

  // GET TASK PAYMENT
  getTaskPayment: (param) => ({
    type: actions.GET_TASK_PAYMENT,
    payload: { param },
  }),
  getTaskPaymentSuccess: (data) => ({
    type: actions.GET_TASK_PAYMENT_SUCCESS,
    payload: data,
  }),
  getTaskPaymentFailure: (error) => ({
    type: actions.GET_TASK_PAYMENT_FAILED,
    payload: error,
  }),

  // GET TASK PAYMENT DETAIL
  getTaskPaymentDetail: (paymentId) => ({
    type: actions.GET_TASK_PAYMENT_DETAIL,
    payload: { paymentId },
  }),
  getTaskPaymentDetailSuccess: (data) => ({
    type: actions.GET_TASK_PAYMENT_DETAIL_SUCCESS,
    payload: data,
  }),
  getTaskPaymentDetailFailure: (error) => ({
    type: actions.GET_TASK_PAYMENT_DETAIL_FAILED,
    payload: error,
  }),

  // UPDATE TASK PAYMENT DETAIL
  updateTaskPaymentDetail: (paymentId) => ({
    type: actions.GET_TASK_PAYMENT_DETAIL,
    payload: { paymentId },
  }),
  updateTaskPaymentDetailSuccess: (data) => ({
    type: actions.GET_TASK_PAYMENT_DETAIL_SUCCESS,
    payload: data,
  }),
  updateTaskPaymentDetailFailure: (error) => ({
    type: actions.GET_TASK_PAYMENT_DETAIL_FAILED,
    payload: error,
  }),
};
export default actions;
