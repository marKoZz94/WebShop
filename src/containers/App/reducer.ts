import produce from 'immer';

import { 
  REFRESH_TOKEN, 
  REFRESH_TOKEN_SUCCESS, 
  REFRESH_TOKEN_ERROR, 
  IS_AUTHENTICATED,
  GET_PROFILE_INFO_SUCCESS,
  UPDATE_PROFILE_INFO,
  GET_PROFILE_INFO,
} from './constants';

import { ProfileInfo } from '../../models/userInfo';

export interface appState {
  loading: boolean;
  refreshToken : boolean;
  error: any;
  profileInfo: ProfileInfo;
  isAuthenticated: boolean | undefined,
  token : string;
  loadingProfileInfo: boolean;
  products: [];
}

export const initialState: appState = {
  loading: false,
  refreshToken: true,
  error: null,
  profileInfo: {
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    image: '',
  },
  isAuthenticated: false,
  token: '',
  loadingProfileInfo: false,
  products: [],
};

const appReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case IS_AUTHENTICATED:
        draft.isAuthenticated = action.payload.isAuthenticated;
        draft.token = action.payload.token;
        draft.refreshToken = false;
        break;
      case GET_PROFILE_INFO:
        draft.loadingProfileInfo = true;
        break;
      case GET_PROFILE_INFO_SUCCESS:
        draft.loadingProfileInfo = false;
        draft.profileInfo.email = action.response?.data.email;
        draft.profileInfo.id = action.response?.data.id;
        draft.profileInfo.firstName = action.response?.data.firstName;
        draft.profileInfo.lastName = action.response?.data.lastName;
        draft.profileInfo.image = action.response?.data.image;
        break;
      case UPDATE_PROFILE_INFO:
        break;
      case REFRESH_TOKEN:
        draft.refreshToken = false;
        break;
      case REFRESH_TOKEN_SUCCESS:
        draft.token = action.token;
        draft.refreshToken = false;
        break;
      case REFRESH_TOKEN_ERROR:
        draft.refreshToken = false;
        break;
    }
  });

export default appReducer;
