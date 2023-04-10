import axiosClient from './axios';

const freelanceApi = {
  getAll(params) {
    const url = '/v1/admin/account/listing';
    return axiosClient.get(url, { params });
  },
};

const freelanceDetailApi = async (userId) => {
  return axiosClient.get(`/v1/user/${userId}/detail`);
};

const freelanceCountApi = async () => {
  return axiosClient.get(`v1/user/count?status=hired,request`);
};
export { freelanceApi, freelanceDetailApi, freelanceCountApi };
