
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/../types/types';

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
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (
        existingProduct &&
        existingProduct.quantity &&
        action.payload.quantity
      ) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCart(state, action: PayloadAction<IProduct[]>) {
      state.items = action.payload;
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, setCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
