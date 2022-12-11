import produce from 'immer';
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  SELECT_CATEGORIES,
  SELECT_CATEGORIES_SUCCESS
} from './constants';

export interface productsState {
  loading: boolean;
  error: any;
  products: [];
  product: object | null;
  page: number;
  currentPage: number;
  pageCount: number;
  categories: Array<Object>;
  category: Array<Object>;
  cart: Array<Object>;
}

export const initialState: productsState = {
  loading: false,
  error: null,
  products: [],
  product: null,
  page: 1,
  currentPage: 1,
  pageCount: 1,
  categories: [],
  category: [],
  cart: [],
};

/* eslint-disable default-case, no-param-reassign */
const productReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PRODUCTS:
        draft.loading = true;
        draft.products = [];
        break; 
      case GET_PRODUCTS_SUCCESS:
        draft.loading = false;
        draft.pageCount = (action?.response?.data?.total / action?.response?.data?.limit) || 1;
        draft.products = action.response.data.products || [];
        break;
      case GET_PRODUCTS_ERROR:
        draft.loading = false;
        draft.products = action.error.response ? action.error.response.status : "Unknown error";
        break;
      case GET_SINGLE_PRODUCT:
        draft.loading = true;
        break;
      case GET_SINGLE_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.product = action.response.data;
        break;
      case GET_SINGLE_PRODUCT_ERROR:
        draft.loading = false;
        draft.product = action.error.response ? action.error.response.status : "Unknown error";
        break;
      case SELECT_CATEGORIES:
        draft.categories = [];
        break;
      case SELECT_CATEGORIES_SUCCESS:
        draft.categories = action.response.data;
        break;
      case ADD_TO_CART:
        draft.loading = false;
        break;
      case ADD_TO_CART_SUCCESS:
        draft.loading = false;
        break;
      case ADD_TO_CART_ERROR:
        draft.loading = false;
        draft.cart = action.error.response ? action.error.response.status : "Unknown error";
        break;
    }
  });

export default productReducer;
