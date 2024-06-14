import React, { useState } from 'react';
import { Header } from '@/components/Header/Header';
import { Global } from './globals';
import styled, { ThemeProvider } from 'styled-components';
import light from './theme/light';
import dark from './theme/dark';
import { Products } from '@/components/Products/Products';
import { Footer } from './components/Footer/Footer';

const Wrapper = styled.div`
  max-width: 100vw;
  /* width: 100%; */
  margin: 0 7% 0 7%;
`;

const App = () => {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Global />
        <Header toggleTheme={toggleTheme} />
        <Products />
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
