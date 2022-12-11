import {fork, take,call, put, cancel} from 'redux-saga/effects';
import {authLoginService} from './services';
import {LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS} from './constants';
import {push} from 'connected-react-router'
import {UserService} from '../../services/UserService';
import { IS_AUTHENTICATED, GET_PROFILE_INFO_SUCCESS, GET_PROFILE_INFO_ERROR } from '../App/constants';
import {getProfileInfoService} from '../App/services';
import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';
import { generatePath } from 'react-router-dom';
import routes from '../../config/routes';
import StoreService from '../../utils/StoreService';
import { setNotificationError, setNotificationSuccess } from '../Notifications/action';

export function* getUserProfile() {
  const id = sessionStorage.getItem('marko');
  try {
    const response: AxiosResponse = yield call(getProfileInfoService, id);
    yield put({type: GET_PROFILE_INFO_SUCCESS, response});
    return response;
  } catch (error) {
    yield put({type: GET_PROFILE_INFO_ERROR, error})
  }
}

function* authorize({username, password}: {username: string, password: string}) : SagaIterator {
    try {
      const response: AxiosResponse = yield call(authLoginService, username, password);

      const {token, expires_in} = response.data;

      UserService.setJwtToLocalStorage(token, expires_in);
      
      const payload = {
        isAuthenticated : true,
        token: token,
      } 

      const profileResponse: AxiosResponse = yield call(getUserProfile);
      const profile = profileResponse.data;

      yield put({type: IS_AUTHENTICATED, payload});

      yield put({type: LOGIN_SUCCESS});

      yield put(push(generatePath(routes.login)));

      const {firstName} = profile;

      StoreService.dispatch(setNotificationSuccess('Login successful ' + firstName));
      
    } catch(error) {
      yield put({type: LOGIN_ERROR, error});
      StoreService.dispatch(setNotificationError('Nešto nije u redu!'));
    }
}

function* loginFlow(): SagaIterator {
    while (true) {
      const {username, password} = yield take([LOGIN_REQUEST]);

      let task = yield fork(authorize, {username, password});
      
      const action = yield take([LOGOUT_REQUEST, LOGIN_ERROR]);

      if (action.type === LOGOUT_REQUEST) {
        if(task) {
          yield cancel(task);
        }  
        yield put({type: LOGOUT_REQUEST}); 
      }
    }
}

export default function* loginSaga() {
  yield fork(loginFlow)
}