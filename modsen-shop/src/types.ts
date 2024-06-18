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
  product: IProduct;
}

interface ProductProps {
  product: IProduct;
  width: string;
  height: string;
}

interface ThemeState {
  currentTheme: DefaultTheme;
}

interface IEmailForm {
  email: string;
}

interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export type {
  IProduct,
  ProductState,
  ProductProps,
  ThemeState,
  IEmailForm,
  SelectProps,
};
