
import { 
    NOTIFICATIONS_SUCCESS, 
    NOTIFICATIONS_INFO, 
    NOTIFICATIONS_ERROR,
    NOTIFICATION_INIT
  } from './constants';
  
  export function getNotification(typeOfNotification: string, message?: string) {
    return {
      type: NOTIFICATION_INIT,
      payload : {
        typeOfNotification,
        message,
      }
      ,
    };
  }
  
  export function setNotificationSuccess(message: string) {
  
    return {
      type: NOTIFICATIONS_SUCCESS,
      message,
    };
  }
  
  export function setNotificationError(message: string) {
    return {
      type: NOTIFICATIONS_ERROR,
      message,
    };
  }
  
  export function setNotificationInfo(message: string) {
    return {
      type: NOTIFICATIONS_INFO,
      message,
    };
  }