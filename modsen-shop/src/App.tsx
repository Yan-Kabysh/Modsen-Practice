import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { ROUTES } from '@/constants/Path';
import { useAppSelector } from '@/hooks/redux';
import { Cart } from '@/pages/Cart/Cart';
import { ContactUs } from '@/pages/ContactUs/ContactUs';
import { Error } from '@/pages/Error/Error';
import { Home } from '@/pages/Home/Home';
import { Login } from '@/pages/Login/Login';
import { ProductPage } from '@/pages/ProductPage/ProductPage';
import { Register } from '@/pages/Register/Register';
import { Shop } from '@/pages/Shop/Shop';

import { Global } from './globals';
import { Wrapper } from './StyledApp';
import { getMergedTheme } from './store/reducers/UIReducer/UISlice';

const App = () => {
  const { currentTheme } = useAppSelector((state) => state.uiReducer);
  const mergedTheme = getMergedTheme(currentTheme);

  return (
    <Wrapper>
      <ThemeProvider theme={mergedTheme}>
        <Global />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SHOP} element={<Shop />} />
          <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactUs />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.ERROR} element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
