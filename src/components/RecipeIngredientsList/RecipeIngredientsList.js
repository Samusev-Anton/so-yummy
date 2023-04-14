import * as React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Ingredient } from 'components/Ingredient/Ingredient';
import { getFilteredIngredients } from 'services/API/Recipes';

import {
  IngredientsSection,
  CounterButton,
  CounterWrapper,
  TitleConterWrapper,
} from './RecipeIngredientsList.styled';

import {
  IngredientsList,
  IngredientsItem,
  IngredientsSectionTitle,
} from '../AddRecipeForm/AddRecipeForm.styled';

export const RecipeIngredientsList = ({ ingredients, onIngredientsChange }) => {
  const [allIngredientsAPI, setAllIngredientsAPI] = useState([]);
  const [options, setOptions] = useState([]);

  const addIngredientToArray = () => {
    onIngredientsChange([
      ...ingredients,
      { id: nanoid(), ttl: '', measure: '', weight: '' },
    ]);
  };

  const removeIngredientFromArray = () => {
    const newArray = [...ingredients.slice(0, -1)];
    onIngredientsChange(newArray);
  };

  const removeIngredientById = id => {
    const newArray = [...ingredients].filter(el => el.id !== id);
    onIngredientsChange(newArray);
  };

  const onSearchChange = async text => {
    try {
      if (text === '') {
        return;
      }
      await getFilteredIngredients(text).then(data => {
        setAllIngredientsAPI(data.data);
        const opt = allIngredientsAPI.map(item => {
          return { value: item.ttl, label: item.ttl };
        });
        setOptions(opt);
      });
    } catch (error) {}
  };

  return (
    <IngredientsSection>
      <TitleConterWrapper>
        <IngredientsSectionTitle>Ingredients</IngredientsSectionTitle>
        <CounterWrapper>
          <CounterButton type="button" onClick={removeIngredientFromArray}>
            -
          </CounterButton>
          <span>{ingredients.length}</span>
          <CounterButton type="button" onClick={addIngredientToArray}>
            +
          </CounterButton>
        </CounterWrapper>
      </TitleConterWrapper>
      <IngredientsList>
        {ingredients.map(el => (
          <IngredientsItem key={el.id}>
            <Ingredient
              titleOptions={options}
              ingredient={el}
              removeIngredientById={removeIngredientById}
              onSearchChange={onSearchChange}
              ingredients={ingredients}
              onIngredientsChange={onIngredientsChange}
            />
          </IngredientsItem>
        ))}
      </IngredientsList>
    </IngredientsSection>
  );
};
