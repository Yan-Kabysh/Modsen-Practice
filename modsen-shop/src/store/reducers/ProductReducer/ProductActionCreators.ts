import { IProduct } from '@/../types/types';
import { AppDispatch } from '@/store/store';

import { productSlice } from './ProductsSlice';

export const fetchProducts =
  (sortBy: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.productsFetching());
      const response = await fetch(
        `https://fakestoreapi.com/products?sort=${sortBy}`
      );
      const data: IProduct[] = await response.json();
      dispatch(productSlice.actions.productsFetchingSuccess(data));
    } catch (e: any) {
      dispatch(productSlice.actions.productsFetchingError(e.message));
    }
  };

export const fetchCategorieProducts =
  (shopBY: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.productsFetching());
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${shopBY}`
      );
      const data: IProduct[] = await response.json();
      dispatch(productSlice.actions.productsFetchingSuccess(data));
    } catch (e: any) {
      dispatch(productSlice.actions.productsFetchingError(e.message));
    }
  };

export const selectedProductFetch =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.productsFetching());
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data: IProduct = await response.json();
      dispatch(productSlice.actions.selectedProductFetching(data));
    } catch (e: any) {
      dispatch(productSlice.actions.productsFetchingError(e.message));
    }
  };
