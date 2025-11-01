import environment from '@config/environment.config';
import { AxiosRequestConfig } from 'axios';

const { http: httpConfig } = environment;
export const baseRequestConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: httpConfig.request.timeout,
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Content-Type': 'application/json; charset=utf-8',
    // Expires: '0',
    // Pragma: 'no-cache',
  },
} as const;
