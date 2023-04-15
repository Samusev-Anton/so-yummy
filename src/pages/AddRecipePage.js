import React from 'react';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Container } from 'components/GlobalStyles';

const AddRecipePage = () => {
  return (
    <>
      <Container>
        <MainPageTitle value={'Add recipe'} />
        <AddRecipeForm />
      </Container>
    </>
  );
};

export default AddRecipePage;
