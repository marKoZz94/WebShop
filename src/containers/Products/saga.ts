import {call, put, takeLatest} from 'redux-saga/effects';
import {getCategoriesService, getProductService, getProductsService, postAddToCartService} from './services';
import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS, GET_PRODUCTS_PER_PAGE, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT, SELECT_CATEGORIES_SUCCESS, SELECT_CATEGORIES_ERROR, SELECT_CATEGORIES, ADD_TO_CART_SUCCESS, ADD_TO_CART_ERROR, ADD_TO_CART} from './constants';

import { AxiosResponse } from 'axios';

function* getProductsFlow(action: any) {

  const {page, category, search} = action;

  try {
    const response: AxiosResponse  = yield call(getProductsService, page, GET_PRODUCTS_PER_PAGE, category, search);
    yield put({type: GET_PRODUCTS_SUCCESS, response});
  } catch(error) {
      if(error) {
      }
      yield put({type: GET_PRODUCTS_ERROR, error});
  }
}

function* getProductFlow(action: any) {
  const {id} = action;
  try {
    const response: AxiosResponse = yield call(getProductService, id);
    yield put({type: GET_SINGLE_PRODUCT_SUCCESS, response})


  } catch (error) {
    yield put({type: GET_SINGLE_PRODUCT_ERROR, error})
  }
}

function* getCategoriesFlow() {

  try {
    const response: AxiosResponse = yield call(getCategoriesService);
    yield put({type: SELECT_CATEGORIES_SUCCESS, response})
  } catch (error) {
    yield put({type: SELECT_CATEGORIES_ERROR, error})
  }
}

function* addToCartFlow(action: any) {
  const {data} = action;

  try {
    const response: AxiosResponse = yield call(postAddToCartService, data);
    yield put({type: ADD_TO_CART_SUCCESS, response})
  } catch (error) {
    yield put({type: ADD_TO_CART_ERROR, error})
  }
}

export default function* productsSaga() {
    yield takeLatest(GET_PRODUCTS, getProductsFlow);
    yield takeLatest(GET_SINGLE_PRODUCT, getProductFlow);
    yield takeLatest(SELECT_CATEGORIES, getCategoriesFlow);
    yield takeLatest(ADD_TO_CART, addToCartFlow);
}