import {call, put, takeLatest} from 'redux-saga/effects';
import {deleteCartService, getCartListService} from './services';
import {CART_LIST_SUCCESS, CART_LIST_ERROR, CART_LIST, DELETE_CART_SUCCESS, DELETE_CART_ERROR, DELETE_CART} from './constants';

import { AxiosResponse } from 'axios';

function* addToCartFlow(action: any) {

  const {id} = action;

  try {
    const response: AxiosResponse = yield call(getCartListService, id);
    yield put({type: CART_LIST_SUCCESS, response})
  } catch (error) {
    yield put({type: CART_LIST_ERROR, error})
  }
}

function* deleteCartFlow(action: any) {

  const {id} = action;

  try {
    const response: AxiosResponse = yield call(deleteCartService, id);
    yield put({type: DELETE_CART_SUCCESS, response});
    yield put({type: CART_LIST_SUCCESS, response});
  } catch (error) {
    yield put({type: DELETE_CART_ERROR, error});
  }
}

export default function* cartState() {
  yield takeLatest(CART_LIST, addToCartFlow);
  yield takeLatest(DELETE_CART, deleteCartFlow);
}