
import { CART_LIST, DELETE_CART } from './constants';

export function cartListAction(id: string) {
  return {
    type: CART_LIST,
    id
  }
}

export function deleteCart(id: string) { 
  return {
    type: DELETE_CART,
    id
  };
}

