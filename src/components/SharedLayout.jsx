import * as React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Container } from './GlobalStyles';

export const SharedLayout = props => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
    </React.Fragment>
  );
};
