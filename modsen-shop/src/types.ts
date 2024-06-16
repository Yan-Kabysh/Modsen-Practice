import { DefaultTheme } from 'styled-components';
export enum THEME_TYPES {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

interface ProductProps {
  product: IProduct;
}

interface ThemeState {
  currentTheme: DefaultTheme;
}

interface IEmailForm {
  email: string;
}

export type { IProduct, ProductState, ProductProps, ThemeState, IEmailForm };
