import produce from 'immer';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_RESET,
} from './constants';

export interface loginState {
  loading: boolean;
  loadingLogout: boolean;
  error: any;
}


export const initialState: loginState = {
  loading: false,
  loadingLogout: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.error = null;
        break;
      case LOGIN_ERROR:
        draft.loading = false;
        draft.error = action.error.response ? action.error.response.message : 0;
        break;
      case LOGOUT_REQUEST:
        draft.loading = false;
        draft.loadingLogout = true;
        draft.error = null;
        break;
      case LOGOUT_SUCCESS:
        draft.loading = false;
        draft.loadingLogout = false;
        draft.error = null;
        break;
      case LOGIN_RESET:
        draft.loading = false;
        draft.loadingLogout= false;
        draft.error = null;
        break; 
    }
  });

export default loginReducer;
