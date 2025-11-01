import httpClient from '@config/axios.config';

export default function apiClient(token?: string) {
  const instance = httpClient();

  instance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return instance;
}
