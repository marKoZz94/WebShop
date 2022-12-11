
import { ADD_TO_CART, GET_PRODUCTS, GET_SINGLE_PRODUCT, SELECT_CATEGORIES } from './constants';

export function getProducts(page: number, category: string, search: string) {
  return {
    type: GET_PRODUCTS,
    page,
    category,
    search
  }
}

export function getProduct(id: any) {
  return {
    type: GET_SINGLE_PRODUCT,
    id
  }
}

export function getCategories() {
  return {
    type: SELECT_CATEGORIES,
  }
}

export function addToCart(data: any) {
  return {
    type: ADD_TO_CART,
    data
  }
}

