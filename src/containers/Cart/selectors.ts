/**
 * Products selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCart = (state: any) => state.cart || initialState;

const cartListSelector = createSelector(
  selectCart,
  cartState => cartState.cart,
);

const loadingSelector = createSelector(
  selectCart,
  cartState => cartState.loading
)

export { 
  cartListSelector,
  loadingSelector
};
