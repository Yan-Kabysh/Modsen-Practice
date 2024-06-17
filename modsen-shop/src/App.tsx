import { Header } from '@/components/Header/Header';
import { Global } from './globals';
import styled, { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer/Footer';
import { useAppSelector } from './hooks/redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Error } from './pages/Error/Error';
import { Shop } from './pages/Shop/Shop';

const Wrapper = styled.div`
  max-width: 100vw;
  margin: 0 7% 0 7%;
`;

const App = () => {
  const { currentTheme } = useAppSelector((state) => state.uiReducer);

  return (
    <Wrapper>
      <ThemeProvider theme={currentTheme}>
        <Global />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
