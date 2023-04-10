import axiosClient from './axios';

const getListCompany = async ({ page, limit }) => {
  return axiosClient.get(`/v1/get/company${page && limit ? `?page=${page}&limit=${limit}` : ''}`);
};

export { getListCompany };
