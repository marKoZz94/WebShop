/**
 * App selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = (state: any) => state.app || initialState;
const selectRouter = (state: any) => state.router;

const makeSelectProfileInfo = createSelector(
  selectApp,
  appState => appState.profileInfo,
);

const makeSelectUserRole = createSelector(
  selectApp,
  appState => appState.profileInfo.role,
);

const makeSelectLoadingProfileInfo = createSelector(
  selectApp,
  appState => appState.loadingProfileInfo,
);

const makeSelectToken = createSelector(
  selectApp,
  appState => appState.token,
);

const makeSelectLoading = createSelector(
  selectApp,
  appState => appState.loading,
);

const makeSelectLoadingLogout = createSelector(
  selectApp,
  appState => appState.loadingLogout,
);

const makeSelectIsAuthenticated = createSelector(
  selectApp,
  appState => appState.isAuthenticated,
);

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState,
);
export { 
  makeSelectProfileInfo,
  makeSelectLoading, 
  makeSelectToken,
  makeSelectIsAuthenticated,
  makeSelectUserRole,
  makeSelectLocation,
  makeSelectLoadingLogout,
  makeSelectLoadingProfileInfo,
};
