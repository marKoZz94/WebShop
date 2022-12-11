import produce from 'immer';

import {
  NOTIFICATIONS_SUCCESS,
  NOTIFICATIONS_ERROR,
  NOTIFICATIONS_INFO,
  NOTIFICATION_INIT,
} from './constants';


export interface newsState {
  success: boolean;
  error: boolean;
  info: boolean;
  warning : boolean;
  message: string;
  key: number
}

export const initialState: newsState = {
  success: false,
  error: false,
  info: false,
  warning : false,
  message: '',
  key: 0,
};

/* eslint-disable default-case, no-param-reassign */
const notificationsReducer = (state = initialState, action: any) =>

  produce(state, draft => {
    switch (action.type) {
      case NOTIFICATION_INIT:
        draft.message = '';
        draft.success = false;
        break;
      case NOTIFICATIONS_SUCCESS:   
        draft.message = action.message;
        draft.error = false;
        draft.success = true;
        draft.key = Math.random();
        break;
      case NOTIFICATIONS_ERROR:
        draft.message = action.message;
        draft.error = true;
        draft.success = false;
        draft.key = Math.random();
        break;
      case NOTIFICATIONS_INFO:
        draft.message = action.message;
        draft.info = true;
        break;   
    }
  });

export default notificationsReducer;
