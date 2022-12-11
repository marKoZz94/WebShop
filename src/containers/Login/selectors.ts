/**
 * Login selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = (state: any) => state.login || initialState;

const makeSelectUsername = createSelector(
  selectLogin,
  loginState => loginState.username,
);

const makeSelectPassword = createSelector(
  selectLogin,
  loginState => loginState.password,
);

const makeSelectLoading = createSelector(
  selectLogin,
  loginState => loginState.loading,
);

const makeSelectLoadingLogout = createSelector(
  selectLogin,
  loginState => loginState.loadingLogout,
);

const makeSelectError = createSelector(
  selectLogin,
  loginState => loginState.error,
);

export { makeSelectUsername, makeSelectPassword, makeSelectLoading, makeSelectError, makeSelectLoadingLogout};
