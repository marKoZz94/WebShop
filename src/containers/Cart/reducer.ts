import produce from 'immer';
import {
  CART_LIST,
  CART_LIST_SUCCESS,
  DELETE_CART,
  DELETE_CART_ERROR,
  DELETE_CART_SUCCESS,
} from './constants';

export interface cartState {
  loading: boolean;
  error: any;
  cart: Array<Object>;
}

export const initialState: cartState = {
  loading: false,
  error: null,
  cart: [],
};

/* eslint-disable default-case, no-param-reassign */
const cartReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case CART_LIST:
        draft.loading = true;
        draft.cart = [];
        break;
      case CART_LIST_SUCCESS:
        draft.loading = false;
        draft.cart = action.response.data.products || [];
        break;
      case DELETE_CART:
        draft.loading = true;
        draft.error = null;
        break;
      case DELETE_CART_SUCCESS:
        draft.loading = false;
        break;
      case DELETE_CART_ERROR:
        draft.loading = false;
        draft.error = action.error.response ? action.error.response.status : "Unknown error";
        break;
    }
  });

export default cartReducer;
