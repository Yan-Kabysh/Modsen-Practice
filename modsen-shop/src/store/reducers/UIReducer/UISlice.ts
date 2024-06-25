import { createSlice } from '@reduxjs/toolkit';
import dark from 'theme/dark';
import light from 'theme/light';

import { ThemeState } from '@/../types/types';
import THEME_TYPES from '@/constants/ThemeTypes';

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
