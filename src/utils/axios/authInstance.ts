import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';
import {BASE_URL} from '../../config/config';

const conf: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

const authInstance: AxiosInstance = axios.create(conf);

export default authInstance;
