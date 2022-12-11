
import {REFRESH_TOKEN} from './constants';
import { LOGOUT_REQUEST } from '../Login/constants';

/**
 * Refresh token
 *
 * @return {object} An action object with a type of GET_USER_INFO
 */
export function refreshToken() {
  return {
    type: REFRESH_TOKEN,
  };
}

export function logout() {
  return {
    type: LOGOUT_REQUEST,
  }
}