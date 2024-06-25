import { User } from 'firebase/auth';
import { ButtonHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';


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
  quantity: number;
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
  reset: boolean
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

interface PaginationDotProps {
  active: boolean;
}

interface CustomSwiperProps {
  autoScrollInterval?: number;
}

interface SlideContainerProps {
  activeIndex: number;
}

interface IMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

interface IDescriptionProps {
  isOpen: boolean;
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
  PaginationDotProps,
  CustomSwiperProps,
  SlideContainerProps,
  IMenuButtonProps,
  IDescriptionProps,
};
