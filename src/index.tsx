import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {IntlProvider} from "react-intl";

import App from './containers/App';
import history from './utils/history';
import configureStore from './configureStore';
import appSaga from './containers/App/saga';
import { StyleSheetManager } from "styled-components";

const initialState = {};
const store = configureStore(initialState, history);
store.runSaga(appSaga);

const MOUNT_NODE = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
    <IntlProvider locale='sr'>
      <ConnectedRouter history={history}  >
          <StyleSheetManager disableCSSOMInjection>
            <App />
          </StyleSheetManager>
      </ConnectedRouter>
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA