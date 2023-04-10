import axiosClient from './axios';

const getListJobs = async (filter, current, pageSize, type) => {
  return axiosClient.post(`/get/jobs`, {
    progress: filter,
    page: current,
    recordPerPage: pageSize,
    type: type,
  });
};
const getJobsLength = async () => {
  return axiosClient.post(`/get/jobs/count`, {
    isPrivate: false,
    progress: ['All', 'Active', 'Expired'],
  });
};
const getJobDetail = async (jobId) => {
  return axiosClient.get(`/get/jobs/${jobId}`);
};

// interview
const getInterviews = async (matchCode) => {
  return axiosClient.get(`/v1/interview/getOne?matchCode=${matchCode}`);
};
const updateInterviews = async (code, workList, meetLink) => {
  return axiosClient.put('/v1/interview/update', {
    isSaveSchedule: false,
    code: code,
    meetingURL: meetLink,
    adminSelectDate: JSON.stringify(workList),
  });
};

export { getListJobs, getJobDetail, getJobsLength, getInterviews, updateInterviews };
