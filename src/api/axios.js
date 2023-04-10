import axios from "axios";

const configs = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  },
};

const axiosClient = axios.create(configs);
axiosClient.defaults.timeout = 10000;
axiosClient.interceptors.request.use(async (request) => {
  const authorization = localStorage.getItem("id_token");
  if (authorization) {
    request.headers.Authorization = `Bearer ${authorization}`;
    request.headers.token = authorization;
  }
  if (request.method === "post") {
    // request.data = trimValueObject(request.data);
  }
  return request;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response?.data) {
      return response.data;
    }
    return Promise.reject(response?.statusText || "");
  },
  async (error) => {
    // const originalRequest = error.config;
    // const { statusCode } = error.response;
    // if (statusCode === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   const refreshToken = localStorage.getItem("refreshToken");
    //   if (refreshToken) {
    //     return axios
    //       .post(`${configs.baseURL}/auth/refresh-token`, {
    //         refreshToken,
    //       })
    //       .then((res) => {
    //         const { token, refreshToken } = res.data;
    //         localStorage.setItem("token", token);
    //         localStorage.setItem("refreshToken", refreshToken);
    //         axios.defaults.headers.common.Authorization = token;
    //         originalRequest.headers.Authorization = token;
    //         return axiosClient(originalRequest);
    //       })
    //       .catch((error) => {
    //         localStorage.remove("token");
    //         localStorage.remove("refreshToken");
    //         return Promise.reject(error.response.data);
    //       });
    //   } else {
    //     localStorage.remove("token");
    //     localStorage.remove("refreshToken");
    //   }
    // }
    // return Promise.reject(error?.response?.data);
    return error?.response;
  }
);

export default axiosClient;
