import * as React from 'react';
import {
  SectionRecipePreparationFields,
  SectionTitle,
  SectionTextArea,
} from 'components/RecipePreparationFields/RecipePreparationFields.styled';
import { BtnAdd } from 'components/AddRecipeForm/AddRecipeForm.styled';
// import { style } from 'styled-system';
// import { useDispatch } from 'react-redux';

export const RecipePreparationFields = () => {
  //   const dispatch = useDispatch();

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //   };
  return (
    <SectionRecipePreparationFields>
      <SectionTitle>Recipe Preparation</SectionTitle>
      <SectionTextArea
        type="text"
        id="myrecipe"
        name="myrecipe"
        placeholder="Enter recipe"
        // onChange={handleInputChange}
        // value={}
      ></SectionTextArea>
      <BtnAdd type="submit">Add</BtnAdd>
    </SectionRecipePreparationFields>
  );
};
