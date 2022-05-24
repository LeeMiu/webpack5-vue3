import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

// request interceptors， 拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const params = {
      // Authoration: `${token || cookie.getToken()}`,
    };
    Object.assign(config.headers, params);
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);
// response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // doing something
    return response.data;
  },
  (error: any) => {
    const response = error.response;
    if (!response) {
      return Promise.reject(response);
    }
    if (response.status >= 300 && response.status < 500) {
      if (response.status === 401) {
        console.error('no access permision!');
      } else {
        console.error(response?.data?.errmsg);
      }
    } else if (response.status >= 500) {
      console.error('system error！');
    }
    return Promise.reject(response);
  },
);

export default service;
