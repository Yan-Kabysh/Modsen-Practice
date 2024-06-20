// CartReducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types';

export interface CartState {
  items: IProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IProduct>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCart(state, action: PayloadAction<IProduct[]>) {
      state.items = action.payload;
    },
  },
});

export const { addItem, removeItem, setCart } = cartSlice.actions;
export default cartSlice.reducer;
