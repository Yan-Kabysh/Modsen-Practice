import { IProduct } from '@/../types/types';
import { productSlice } from '@/store/reducers/ProductReducer/ProductsSlice';
import { AppDispatch } from '@/store/store';

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
