import { IProduct } from '@/types';
import { AppDispatch } from '../store';
import { productSlice } from './ProductsSlice';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching());
    const response = await fetch('https://fakestoreapi.com/products');
    const data: IProduct[] = await response.json();
    dispatch(productSlice.actions.productsFetchingSuccess(data));
  } catch (e: any) {
    dispatch(productSlice.actions.productsFetchingError(e.message));
  }
};
