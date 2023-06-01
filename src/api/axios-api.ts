import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://openmarket.weniv.co.kr/';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const accessInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// accessInstance.interceptors.request.use((config) => {
//   if (!config.headers.Authorization) {
//     config.headers = {
//       ...config.headers,
//       Authorization: `JWT ${localStorage.getItem('token')}`,
//     };
//   }

//   return config;
// });

accessInstance.interceptors.request.use((config: any): AxiosRequestConfig => {
  config.headers = {
    ...config.headers,
    Authorization: `JWT ${localStorage.getItem('token')}`,
  };

  return config;
});

export const getProductList = async (params: string) => {
  const res = await instance.get(`/products/?page=${params}`);
  return res.data;
};

export const getProductDetail = async (id: string | undefined) => {
  const res = await instance.get(`/products/${id}`);
  return res.data;
};
