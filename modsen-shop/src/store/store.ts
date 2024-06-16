import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productReducer from '@/store/reducers/ProductsSlice';
import uiReducer from '@/store/reducers/UIReducer/UISlice';

const rootReducer = combineReducers({
  productReducer,
  uiReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
