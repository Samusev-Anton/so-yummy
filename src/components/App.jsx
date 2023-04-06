// import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { WelcomePage } from 'pages/WellcomePage';
import { CategoriesPage } from 'pages/CategoriesPage';
// import { ShoppingListPage } from 'pages/ShoppingListPage';
import { RecipePage } from 'pages/RecipePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/categories/:categoryName?"
            element={<CategoriesPage />}
          ></Route>
          <Route path="/shopping-list" element={<RecipePage />}></Route>
          {/* <Route path="/shopping-list" element={<ShoppingListPage />}></Route> */}
        </Route>
        {/* шлях welcome до того як буде створено юзера/редакс стору */}
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
