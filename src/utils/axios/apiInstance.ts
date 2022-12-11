import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';
import {UserService} from '../../services/UserService';
import {BASE_URL} from '../../config/config';
import StoreService from '../StoreService';
import {logout} from '../../containers/App/actions';
import history from '../../utils/history';
import routes from '../../config/routes';

const conf: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

const apiInstance: AxiosInstance = axios.create(conf);

apiInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {

  const localStorageToken = UserService.getJwtFromLocalStorage();
  const token = localStorageToken && localStorageToken.token ? localStorageToken.token : '';
  if(config && config.headers) {
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

apiInstance.interceptors.response.use((response) => {
  return response;  
}, async (error: any)=>{
  if(error && error.response && error.response.status === 403) {
    return history.push(routes.error403);
  }
  if(error && error.response && error.response.status === 404) {
    return history.push(routes.error404);
  }
  if(error && error.response && error.response.status === 401) {
    UserService.removeJwtFromLocalStorage();
    return StoreService.dispatch(logout())
  }
  return Promise.reject(error);
});

export default apiInstance;

