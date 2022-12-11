import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNotifications = (state: any) => state.notifications || initialState;

const makeSelectNotificationsSuccess = createSelector(
  selectNotifications,
  notificationsState => notificationsState.success,
);

const makeSelectNotificationsMessage = createSelector(
  selectNotifications,
  notificationsState => notificationsState.message,
);

const makeSelectNotificationsError = createSelector(
  selectNotifications,
  notificationsState => notificationsState.error,
);

const makeSelectNotificationsKey = createSelector(
  selectNotifications,
  notificationsState => notificationsState.key,
);

export { 
  makeSelectNotificationsSuccess, 
  makeSelectNotificationsMessage, 
  makeSelectNotificationsError, 
  makeSelectNotificationsKey
};
