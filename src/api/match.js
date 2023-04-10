import axiosClient from './axios';

// GET
const getMatch = async (jobId, joinData, search, progress, page, recordPerPage) => {
  return axiosClient.post(`/v1/match/get`, {
    jobCode: jobId,
    joinData: [joinData, 'job'],
    search: search,
    progress: progress,
    page: page,
    recordPerPage: recordPerPage,
  });
};
const getMatchOne = async (matchId) => {
  return axiosClient.get(`/v1/match/getOne?code=${matchId}`);
};
const matchHistory = async (maskId) => {
  return axiosClient.get(`/v1/matchHistory/getAll?code=${maskId}`);
};
const getMatchMore = async (param) => {
  return axiosClient.get(`/v1/admin/account/listing?userRole=freelancer&professional=${param}`);
};
const getMatchCount = async (param) => {
  return axiosClient.get(`/v1/match/getCount?jobCode=${param}`);
};
// PUT
const updateStatus = async (maskId, status, invited) => {
  return axiosClient.put(`/v1/match/update`, {
    matchCode: maskId,
    message: 'Selected the application',
    subject: 'Talent Manager',
    status: status,
    interviewInviteted: invited,
  });
};

// POST
const insertHistory = async (maskCode, status, message) => {
  return axiosClient.post(`/v1/matchHistory`, {
    message: message,
    status: status,
    subject: 'Talent Manager',
    object: 'admin',
    matchCode: maskCode,
    refType: 'interview',
  });
};
export { getMatch, updateStatus, matchHistory, insertHistory, getMatchMore, getMatchCount, getMatchOne };
