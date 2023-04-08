import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getRecipesIngredients } from '../../redux/selectors';
import { Ingredient } from 'components/Ingredient/Ingredient';
import { SectionTitle } from 'components/RecipePreparationFields/RecipePreparationFields.styled';

export const RecipeIngredientsList = searchTerm => {
  //   const dispatch = useDispatch();
  // const ingerdients = useSelector(getRecipesIngredients);

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //   };
  // const arr = [{}];
  return (
    <>
      <SectionTitle>Ingredients</SectionTitle>
      <ul>
        <li>
          <Ingredient searchTerm={searchTerm} />
        </li>
      </ul>
      {/* <ul>
        {ingerdients.map(el => (
          <Ingredient key={el.id} {...el} />
        ))}
      </ul> */}
    </>
  );
};
