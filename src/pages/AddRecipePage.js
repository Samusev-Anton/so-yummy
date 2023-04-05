import React from 'react';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
// import { Loader } from 'components/Loader/Loader';

export const AddRecipePage = () => {
  return (
    <>
      {/* {loading && <Loader />} */}
      <MainPageTitle value={'Add recipe'} />
      <AddRecipeForm />
      <PopularRecipe />
    </>
  );
};
