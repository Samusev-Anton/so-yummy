// import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { SharedLayout } from './SharedLayout';
import { WelcomePage } from 'pages/WelcomePage/WellcomePage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { SignUpPage } from 'pages/SignUpPage';
import { LoginPage } from 'pages/LoginPage';

// import MainPage from 'pages/MainPage';
// import { AddRecipePage } from 'pages/AddRecipePage';
// import { MyRecipePage } from 'pages/MyRecipePage';
// import Favoritepage from 'pages/Favoritepage';
// import { ShoppingPage } from 'pages/ShoppingPage';
import { SearchPage } from 'pages/SearchPage';
// import { Error } from 'pages/Error';

import { PublicRoute } from 'services/routes/PublicRoute';
import { PrivateRoute } from 'services/routes/PrivateRoute';

import { getCurrentUser } from '../redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/welcome"
          element={<PublicRoute component={WelcomePage} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={SignUpPage} />}
        />
        <Route path="/signin" element={<PublicRoute component={LoginPage} />} />
        <Route
          path="/"
          element={
            <PrivateRoute component={SharedLayout} redirectTo="/welcome" />
          }
        >
          {/* <Route path="/main" element={<MainPage />} /> */}
          <Route
            path="/categories/:categoryName?"
            element={<CategoriesPage />}
          />
          {/* <Route path="/add" element={<AddRecipePage />} />
          <Route path="/my" element={<MyRecipePage />} />
          <Route path="/favorite" element={<Favoritepage />} />
          <Route path="/shopping-list" element={<ShoppingPage />} /> */}
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </>
  );
};
