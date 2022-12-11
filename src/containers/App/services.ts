import apiInstance from '../../utils/axios/apiInstance';

export const getRefreshToken = () => {
  return apiInstance.post('/refresh-token');
}

export const getProfileInfoService = (id: any) => {
  return apiInstance.get(`/users/${id}`);
}