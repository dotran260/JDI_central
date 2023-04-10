import axiosClient from './axios';

const getListTasks = async (jobId, joinData) => {
  return axiosClient.post(`/v1/match/get`, {
    jobCode: jobId,
    joinData: ['freelancer', 'job'],
  });
};

const getTaskPayment = async (param) => {
  return axiosClient.get(`/v1/get/payments?matchCode=${param}`);
};

const getDetailPayment = async (paymentId) => {
  return axiosClient.get(`/v1/payment/getOne?paymentCode=${paymentId}`);
};

const updatePayment = async (paymentCode, matchCode, refType, log, subject, status) => {
  return axiosClient.put(`/v1/payment/update`, {
    paymentCode: paymentCode,
    matchCode: matchCode,
    refType: refType,
    log: log,
    subject: subject,
    object: null,
    status: status,
  });
};
const updateEndTask = async (maskId) => {
  return axiosClient.put(`/v1/match/update`, {
    matchCode: maskId,
    status: 'hired',
    taskStatus: 'completed',
  });
};
const updatePaymentStatus = async (maskId) => {
  return axiosClient.put(`/v1/match/update`, {
    matchCode: maskId,
    status: 'hired',
    paymentStatus: 'paid',
  });
};
const getPaymentSalaryApi = async (matchId) => {
  return axiosClient.get(`/v1/offer/getOne?matchCode=${matchId}`);
};

export { getListTasks, getTaskPayment, getDetailPayment, updatePayment, updateEndTask, updatePaymentStatus, getPaymentSalaryApi };
