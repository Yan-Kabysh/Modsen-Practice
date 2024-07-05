import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct, ProductState } from '@/../types/types';

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
  product: {} as IProduct,
  swiperProducts: []
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
      state.swiperProducts =action.payload.slice(0, 4);
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectedProductFetching(state, action: PayloadAction<IProduct>) {
      state.isLoading = false;
      state.error = '';
      state.product = action.payload;
    },
  },
});

export default productSlice.reducer;
