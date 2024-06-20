import { User } from 'firebase/auth';
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

interface IUser {
  email: string | null;
  token: string | null;
  id: string | null;
}

interface IUserState {
  user: IUser;
  isLoading: boolean;
  error: string;
}

interface ExtendedUser extends User {
  accessToken: string;
}

export type {
  IProduct,
  ProductState,
  ProductProps,
  ThemeState,
  IEmailForm,
  SelectProps,
  IUserState,
  IUser,
  ExtendedUser,
};
