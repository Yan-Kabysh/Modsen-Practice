// CartReducer.test.ts

import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import cartReducer, { CartState, addItem, removeItem, setCart, updateQuantity } from '@/store/reducers/CartReducer/CartReducer';
import { IProduct } from '@/../types/types';
import { expect } from '@jest/globals';


describe('cart reducer', () => {
  let store: EnhancedStore<{ cart: CartState }, any>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
    });
  });

  it('should handle addItem', () => {
    const productToAdd: IProduct = {
      id: 1,
      title: 'Test Product',
      price: 10,
      description: 'Test description',
      category: 'Test category',
      image: 'test.jpg',
      rating: { rate: 4.5, count: 10 },
      quantity: 1,
    };

    store.dispatch(addItem(productToAdd));

    expect(store.getState().cart.items).toContainEqual(productToAdd as any);
  });

  it('should handle removeItem', () => {
    const initialState: IProduct[] = [
      { id: 1, title: 'Product 1', price: 10, description: '', category: '', image: '', rating: { rate: 4, count: 10 }, quantity: 1 },
      { id: 2, title: 'Product 2', price: 20, description: '', category: '', image: '', rating: { rate: 3.5, count: 15 }, quantity: 1 },
    ];

    store.dispatch(setCart(initialState));
    store.dispatch(removeItem(1)); // Remove item with id 1

    expect(store.getState().cart.items).toEqual([
      { id: 2, title: 'Product 2', price: 20, description: '', category: '', image: '', rating: { rate: 3.5, count: 15 }, quantity: 1 }
    ]);
  });

  it('should handle updateQuantity', () => {
    const initialState: IProduct[] = [
      { id: 1, title: 'Product 1', price: 10, description: '', category: '', image: '', rating: { rate: 4, count: 10 }, quantity: 1 },
      { id: 2, title: 'Product 2', price: 20, description: '', category: '', image: '', rating: { rate: 3.5, count: 15 }, quantity: 1 },
    ];

    store.dispatch(setCart(initialState));
    store.dispatch(updateQuantity({ id: 1, quantity: 3 })); // Update quantity of item with id 1 to 3

    expect(store.getState().cart.items.find(item => item.id === 1)?.quantity).toEqual(3);
  });

  // Add more tests for other actions as needed

});
