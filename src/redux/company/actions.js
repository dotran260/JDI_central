const actions = {
  GET_LIST_COMPANY: "GET_LIST_COMPANY",
  GET_LIST_COMPANY_SUCCESS: "GET_LIST_COMPANY_SUCCESS",
  GET_LIST_COMPANY_FAILURE: "GET_LIST_COMPANY_FAILURE",

  getListCompany: ({ page = 1, limit = 10 }) => ({
    type: actions.GET_LIST_COMPANY,
    payload: { page, limit },
  }),
  getListCompanySuccess: (data) => ({
    type: actions.GET_LIST_COMPANY_SUCCESS,
    payload: data,
  }),
  getListCompanyFailure: (error) => ({
    type: actions.GET_LIST_COMPANY_FAILURE,
    payload: error,
  }),
};
export default actions;
