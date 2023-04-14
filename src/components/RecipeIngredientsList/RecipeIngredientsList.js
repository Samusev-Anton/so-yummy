import * as React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Ingredient } from 'components/Ingredient/Ingredient';
// import { SectionTitle } from 'components/AddRecipeForm/AddRecipeForm.styled';

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
  PopularTitle,
} from '../AddRecipeForm/AddRecipeForm.styled';

export const RecipeIngredientsList = ({ onIngredientsChange }) => {
  const [id, setId] = useState(nanoid());
  const [ingredients, setIngredients] = useState([]);

  const addIngredientToArray = () => {
    setId(nanoid());
    const newObject = { id: id, title: '', quantity: '', weight: '' };
    setIngredients([...ingredients, newObject]);
  };

  const handleAddIngredient = () => {
    const data = JSON.stringify(
      ingredients.map(({ id, quantity, title, weight }) => ({
        id,
        quantity,
        title,
        weight,
      }))
    );

    onIngredientsChange(data);
  };

  const removeIngredientFromArray = () => {
    const newArray = [...ingredients.slice(0, -1)];
    setIngredients(newArray);
  };

  const removeIngredientById = id => {
    const newArray = ingredients.filter(el => el.id !== id);
    setIngredients(newArray);
  };

  const handleTitleChange = (id, title) => {
    setIngredients(
      ingredients.map(el => (el.id === id ? { ...el, title } : el))
    );
  };

  const handleQuantityChange = (id, quantity) => {
    setIngredients(
      ingredients.map(el => (el.id === id ? { ...el, quantity } : el))
    );
  };

  const handleWeightChange = (id, weight) => {
    setIngredients(
      ingredients.map(el => (el.id === id ? { ...el, weight } : el))
    );
  };
  return (
    <IngredientsSection
      onKeyDown={handleAddIngredient}
      onMouseMove={handleAddIngredient}
      onMouseLeave={handleAddIngredient}
    >
      <TitleConterWrapper>
        <IngredientsSectionTitle>Ingredients</IngredientsSectionTitle>
        <CounterWrapper>
          <CounterButton onClick={removeIngredientFromArray}>-</CounterButton>
          <span>{ingredients.length}</span>
          <CounterButton onClick={addIngredientToArray}>+</CounterButton>
        </CounterWrapper>
      </TitleConterWrapper>
      <IngredientsList>
        {ingredients.map(el => (
          <IngredientsItem key={el.id}>
            <Ingredient
              {...el}
              id={el.id}
              title={el.title}
              weight={el.weight}
              quantity={el.quantity}
              onTitleChange={handleTitleChange}
              onQuantityChange={handleQuantityChange}
              onWeightChange={handleWeightChange}
              removeIngredientById={removeIngredientById}
            />
          </IngredientsItem>
        ))}
      </IngredientsList>
    </IngredientsSection>
  );
};
