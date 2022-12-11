
import { LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_RESET } from './constants';


export function loginAction({username, password} : {username: string, password: string}) {
  return {
    type: LOGIN_REQUEST,
    username,
    password,
  };
}

export function logoutAction() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function resetLogoutAction() {
  return {
    type: LOGIN_RESET,
  };
}

