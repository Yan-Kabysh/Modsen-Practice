import 'styled-components';

import { THEME_TYPES } from '@/constants/ThemeTypes';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: THEME_TYPES;

    colors: {
      white: string;
      black: string;
      accent: string;
      background: string;
      text: string;
      buttonBackground: string;
      buttonText: string;
      error: string;
      lightGray: string;
      gray: string;
      darkGray: string;
    };
  }
}
