import authInstance from '../../utils/axios/authInstance';
import apiInstance from '../../utils/axios/apiInstance';

export const authLoginService = (username: string, password: string) => {
  const params = {
    username, 
    password,
  }

  return new Promise(async (resolve, reject) => {
    try {
      const response = await authInstance.post('/auth/login', params);
      sessionStorage.setItem('marko', response.data.id);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const authLogoutService = () => {
    
  return new Promise(async (resolve, reject) => {
    try {
      const response = await apiInstance.get('/logout');
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

