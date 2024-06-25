import 'styled-components';

import { THEME_TYPES } from '@/types';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: THEME_TYPES;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
      buttonBackground: string;
      buttonText: string;
    };
  }
}
