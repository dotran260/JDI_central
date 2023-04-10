const actions = {
  GET_LIST_FREELANCER: 'GET_LIST_FREELANCER',
  GET_LIST_FREELANCER_SUCCESS: 'GET_LIST_FREELANCER_SUCCESS',
  GET_LIST_FREELANCER_FAILURE: 'GET_LIST_FREELANCER_FAILURE',

  GET_FREELANCER_DETAIL: 'GET_FREELANCER_DETAIL',
  GET_FREELANCER_DETAIL_SUCCESS: 'GET_FREELANCER_DETAIL_SUCCESS',
  GET_FREELANCER_DETAIL_FAILURE: 'GET_FREELANCER_DETAIL_FAILURE',

  SEARCH_LIST_FREELANCER: 'SEARCH_LIST_FREELANCER',

  getListFreelancer: (data) => ({
    type: actions.GET_LIST_FREELANCER,
    payload: data,
  }),
  getListFreelancerSuccess: (data) => ({
    type: actions.GET_LIST_FREELANCER_SUCCESS,
    payload: data,
  }),
  getListFreelancerFailure: (error) => ({
    type: actions.GET_LIST_FREELANCER_FAILURE,
    payload: error,
  }),

  getFreelancerDetail: (userId) => ({
    type: actions.GET_FREELANCER_DETAIL,
    payload: { userId },
  }),
  getFreelancerDetailSuccess: (data) => ({
    type: actions.GET_FREELANCER_DETAIL_SUCCESS,
    payload: data,
  }),
  getFreelancerDetailFailure: (error) => ({
    type: actions.GET_FREELANCER_DETAIL_FAILURE,
    payload: error,
  }),

  searchListFreelancer: (text) => ({
    type: actions.SEARCH_LIST_FREELANCER,
    payload: text,
  }),
};
export default actions;
