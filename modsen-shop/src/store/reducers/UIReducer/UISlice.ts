import { ThemeState } from '@/types';
import { THEME_TYPES } from '../../../types';

import { createSlice } from '@reduxjs/toolkit';
import light from 'theme/light';
import dark from 'theme/dark';

const savedTheme = localStorage.getItem('theme');

const initialState: ThemeState = {
  currentTheme: savedTheme === THEME_TYPES.DARK ? dark : light,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme.title === THEME_TYPES.LIGHT ? dark : light;
      localStorage.setItem('theme', state.currentTheme.title);
    },
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export default uiSlice.reducer;
