import { ThemeState } from '@/types';
import { THEME_TYPES } from '../../../types';

import { createSlice } from '@reduxjs/toolkit';
import light from 'theme/light';
import dark from 'theme/dark';

const initialState: ThemeState = {
  currentTheme: light,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme.title === THEME_TYPES.LIGHT ? dark : light;
    },
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export default uiSlice.reducer;
