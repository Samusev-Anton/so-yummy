import * as React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import Hero from './Hero/Hero';

import { AdditionalFooter } from './Footer/AdditionalFooter';
import { Container } from './GlobalStyles';

export const SharedLayout = props => {
  return (
    <React.Fragment>
      <Container>
        <Header />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
      <Hero />

      <AdditionalFooter />
    </React.Fragment>
  );
};
