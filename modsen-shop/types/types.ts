import { User } from 'firebase/auth';
import { ButtonHTMLAttributes, ReactNode } from 'react';
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
  swiperProducts: IProduct[];
}

interface ProductProps {
  product: IProduct;
  width: string;
  height: string;
}

interface ThemeState {
  currentTheme: DefaultTheme;
  commonThemeConfig: CommonThemeInterface
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

interface IHeaderButtons{
  isActive: boolean;
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  children: ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
  maxWidth?: string;
};



interface CommonThemeInterface{
  xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl:  string;
    xxxl:  string;

    half: string,
    full: string,

    iconSize: string,

    time: string,

    cartItemSize:string,
    thumbSize: string,

    bigDots: string,
  smallDots: string,
  mediumPadding: string,
  bigPadding: string,


    btnMaxWidth: string,
    btnHeight: string,
    cartColumnSize: string,

    btnMaxWidthMedia: string,
  btnHeightMedia: string,
  
    desktopContentMarginTop:  string;
    desktopContentMarginBottom:  string;
  
    mobileContentMarginTop:  string;
    mobileContentMarginBottom:  string;

    borderSmall: string,
    borderBig: string,
}

interface WrapperProps {
  width?: string;
}

interface ImageWrapperProps {
  height?: string;
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
  CommonThemeInterface,
  WrapperProps,
  ImageWrapperProps,
  IHeaderButtons,
  ButtonProps,
};
