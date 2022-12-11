import {all, put, takeLatest} from 'redux-saga/effects';

import {
   NOTIFICATIONS_SUCCESS, 
   NOTIFICATION_INIT, 
   NOTIFICATIONS_ERROR,
} from './constants';

function* notificationsFlow(action: any) {
    const message =  action.payload.message;
    switch (action.payload.typeOfNotification) {
       case NOTIFICATIONS_SUCCESS:
          yield put({type: NOTIFICATIONS_SUCCESS, message})  
          break;
       case NOTIFICATIONS_ERROR:
          yield put({type: NOTIFICATIONS_ERROR, message})  
          break;
    }  
}

export default function* notificationsSaga() {
    yield all([
       takeLatest(NOTIFICATION_INIT, notificationsFlow)
    ])
}