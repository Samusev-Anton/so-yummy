// import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from './SharedLayout';
import { WelcomePage } from 'pages/WelcomePage/WellcomePage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { SignUpPage } from 'pages/SignUpPage/SignUpPage';
import { LoginPage } from 'pages/LoginPage';

import { MainPage } from 'pages/MainPage';
import { AddRecipePage } from 'pages/AddRecipePage';
import { MyRecipesPage } from 'pages/MyRecipesPage/MyRecipesPage';
import { FavoritePage } from 'pages/FavoritePage/FavoritePage';
import { ShoppingListPage } from 'pages/ShoppingListPage';
import { SearchPage } from 'pages/SearchPage';
// import { Error } from 'pages/Error';
import { RecipePage } from 'pages/RecipePage';

import { PublicRoute } from 'services/routes/PublicRoute';
import { PrivateRoute } from 'services/routes/PrivateRoute';

import { getCurrentUser } from '../redux/auth/auth-operations';
// import { ShoppingListPage } from 'pages/ShoppingListPage';

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
          <Route path="/main" element={<MainPage />} />
          <Route
            path="/categories/:categoryName?"
            element={<CategoriesPage />}
          />
          <Route path="/add" element={<AddRecipePage />} />
          {/* <Route path="/favorite" element={<Favoritepage />} /> */}
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          {/* /* <Route path="/add" element={<AddRecipePage />} /> */}
          {/* <Route path="/my" element={<MyRecipePage />} /> */}
          <Route path="/recipe/:recipeId" element={<RecipePage />} /> */
          <Route path="/search" element={<SearchPage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
