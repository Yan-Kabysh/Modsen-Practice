import { IProduct, ProductState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = '';
      state.products = action.payload;
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
