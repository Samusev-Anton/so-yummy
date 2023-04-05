import * as React from 'react';
// import { useDispatch } from 'react-redux';
import { RecipeDescriptionFields } from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from 'components/RecipePreparationFields/RecipePreparationFields';

export const AddRecipeForm = () => {
  //   const dispatch = useDispatch();

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //   };
  return (
    <>
      <RecipeDescriptionFields />
      <RecipeIngredientsFields />
      <RecipePreparationFields />
    </>
  );
};
