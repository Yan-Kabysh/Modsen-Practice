import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productReducer from '@/store/reducers/ProductsSlice';
import uiReducer from '@/store/reducers/UIReducer/UISlice';
import userReducer from '@/store/reducers/UserReducer/UserSlice';
import cartReducer from './reducers/CartReducer/CartReducer';

const rootReducer = combineReducers({
  productReducer,
  uiReducer,
  userReducer,
  cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
