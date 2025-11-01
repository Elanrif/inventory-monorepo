import axios from 'axios';
import { baseRequestConfig } from './axios/base-request.config';

export default function httpClient() {
  const instance = axios.create({
    ...baseRequestConfig,
  });

  return instance;
}
