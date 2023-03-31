import * as React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';

export const SharedLayout = props => {
  return (
    <React.Fragment>
      <nav>Home</nav>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </React.Fragment>
  );
};
