/**
 * Products selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProducts = (state: any) => state.products || initialState;

const productsSelector = createSelector(
  selectProducts,
  productsState => productsState.products,
);

const productSelector = createSelector(
  selectProducts,
  productsState => productsState.product,
);

const pageCountSelector = createSelector(
  selectProducts,
  productsState => productsState.pageCount,
)

const loadingSelector = createSelector(
  selectProducts,
  productsState => productsState.loading,
);

const categoriesSelector = createSelector(
  selectProducts,
  productsState => productsState.categories,
);

const categorySelector = createSelector(
  selectProducts,
  productsState => productsState.category,
);

export { 
  productsSelector,
  productSelector,
  pageCountSelector,
  loadingSelector,
  categoriesSelector,
  categorySelector,
};
