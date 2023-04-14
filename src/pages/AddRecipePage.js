import React from 'react';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Container } from 'components/GlobalStyles';
// import { Loader } from 'components/Loader/Loader';

const AddRecipePage = () => {
  return (
    <>
      {/* {loading && <Loader />} */}
      <Container>
        <MainPageTitle value={'Add recipe'} />
        <AddRecipeForm />
      </Container>
    </>
  );
};

export default AddRecipePage;
