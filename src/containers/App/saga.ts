import {fork, take, call, put, all, takeEvery} from 'redux-saga/effects';
import {
  REFRESH_TOKEN,
  REFRESH_TOKEN_ERROR,
  IS_AUTHENTICATED,
  GET_PROFILE_INFO,
} from './constants';

import {LOGOUT_REQUEST, LOGOUT_SUCCESS} from '../Login/constants' 
import routes from '../../config/routes';
import {getUserProfile} from '../Login/saga'
import {UserService}  from '../../services/UserService';

import * as loginActions from '../Login/actions'

import {push} from 'connected-react-router'

function* resetState() {
  yield put (loginActions.resetLogoutAction())

}

function* refreshTokenFlow() {
  try {
    const {token, jwtExpire} = UserService.getJwtFromLocalStorage();
    if(token && jwtExpire ) {
      const payload = {
        isAuthenticated : true,
        token: token,
      }

      yield put({type: GET_PROFILE_INFO});
      yield call(getUserProfile);
      
      yield put({type: IS_AUTHENTICATED, payload});

      const action = yield take([LOGOUT_REQUEST]);

      if (action.type === LOGOUT_REQUEST) {
        yield put({type:LOGOUT_REQUEST});
      }
      
    } else {
      const payload = {
        isAuthenticated : false,
        token: '',
      }
      UserService.removeJwtFromLocalStorage();
      yield put({type: IS_AUTHENTICATED, payload});
    }
  } catch (error) {
    yield put({type: REFRESH_TOKEN_ERROR, error})
  }
}

// Logout
export function* logout() {
  while(true) {
    yield take (LOGOUT_REQUEST);
    const payload = {
      isAuthenticated : false,
      token: '',
      profileInfo: null,
    }
    try {
      UserService.removeJwtFromLocalStorage();
      yield put({type: IS_AUTHENTICATED, payload});
      yield put({type: LOGOUT_SUCCESS});

      yield call(resetState);
      yield put(push(routes.login));
    } catch(error) {

    }
  }
}

export default function* appSaga() {
    yield all([
      takeEvery(REFRESH_TOKEN, refreshTokenFlow),
      fork(logout),
    ])
}
