import * as React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';



import { AdditionalFooter } from './Footer/AdditionalFooter';
import { Container } from './GlobalStyles';


export const SharedLayout = props => {
  return (
    <React.Fragment>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      <Footer />
      <AdditionalFooter />
    </React.Fragment>
  );
};
