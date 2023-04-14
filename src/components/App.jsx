// import styled from 'styled-components';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { getMode } from '../redux/theme/themeSelector';
import { theme as lightMode, darkTheme as darkMode } from '../utils/theme';
import { GlobalStyle } from './App.styled';

import { SharedLayout } from './SharedLayout';
import { PublicRoute } from 'services/routes/PublicRoute';
import { PrivateRoute } from 'services/routes/PrivateRoute';
import { WelcomePage } from 'pages/WelcomePage/WellcomePage';
import { SignUpPage } from 'pages/SignUpPage/SignUpPage';
import { LoginPage } from 'pages/LoginPage';

import { getCurrentUser } from '../redux/auth/auth-operations';

const MainPage = lazy(() => import('pages/MainPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));

const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const RecipePage = lazy(() => import('pages/RecipePage'));

export const App = () => {
  const { mode } = useSelector(getMode);
  const themeMode = mode === 'light' ? lightMode : darkMode;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
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
          <Route index element={<MainPage />} />
          <Route
            path="/categories/:categoryName?"
            element={<CategoriesPage />}
          />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} /> */
          <Route path="/search" element={<SearchPage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
};
