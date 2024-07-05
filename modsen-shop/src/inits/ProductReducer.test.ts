import { IProduct } from '@/../types/types';
import { productSlice } from '@/store/reducers/ProductReducer/ProductsSlice'; // Adjust the import path as per your setup
import { expect } from '@jest/globals';

const { reducer, actions } = productSlice;

describe('productSlice reducer', () => {
  const initialState = {
    products: [],
    isLoading: false,
    error: '',
    product: {} as IProduct,
    swiperProducts: []
  };

  it('should handle productsFetching action', () => {
    const nextState = reducer(initialState, actions.productsFetching());
    expect(nextState.isLoading).toBe(true);
  });

  it('should handle productsFetchingSuccess action', () => {
    const mockProducts: IProduct[] = [{
        id: 1, title: 'Selected Product',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: 0,
            count: 0
        },
        quantity: 0
    }];
    const nextState = reducer(initialState, actions.productsFetchingSuccess(mockProducts));
    
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe('');
    expect(nextState.products).toEqual(mockProducts);
  });

  it('should handle productsFetchingError action', () => {
    const errorMessage = 'Failed to fetch products';
    const nextState = reducer(initialState, actions.productsFetchingError(errorMessage));
    
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });

  it('should handle selectedProductFetching action', () => {
    const mockProduct: IProduct = {
        id: 1, title: 'Selected Product',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: 0,
            count: 0
        },
        quantity: 0
    };
    const nextState = reducer(initialState, actions.selectedProductFetching(mockProduct));
    
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe('');
    expect(nextState.product).toEqual(mockProduct);
  });
});
