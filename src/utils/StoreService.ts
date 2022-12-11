import {Action, Store} from 'redux';

let _store: Store | null;

function setStore(storeRef: Store) {
  _store = storeRef;
}

function dispatch(action: Action) {
  return _store && _store.dispatch(action);
}

function getState()  {
  return _store ? _store.getState() : null;
}

const StoreService = {
  setStore,
  dispatch,
  getState,
}

export default StoreService; 
