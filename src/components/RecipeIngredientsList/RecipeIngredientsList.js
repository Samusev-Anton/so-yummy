import * as React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Ingredient } from 'components/Ingredient/Ingredient';
// import { SectionTitle } from 'components/AddRecipeForm/AddRecipeForm.styled';
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
  // PopularTitle,
} from '../AddRecipeForm/AddRecipeForm.styled';
// import { Log } from 'styled-icons/octicons';

export const RecipeIngredientsList = ({ onIngredientsChange }) => {
  const [id, setId] = useState(nanoid());
  const [ingredients, setIngredients] = useState([]);
  const [allIngredientsAPI, setAllIngredientsAPI] = useState([]);
  const [options, setOptions] = useState([]);

  const addIngredientToArray = () => {
    setId(nanoid());
    const newObject = { id: id, title: '', quantity: '', weight: '' };
    setIngredients([...ingredients, newObject]);
  };

  // const handleAddIngredient = () => {
  //   const data = JSON.stringify(
  //     ingredients.map(({ id, quantity, title, weight }) => ({
  //       id,
  //       quantity,
  //       title,
  //       weight,
  //     }))
  //   );

  //   console.log(data);

  //   onIngredientsChange(data);
  // };

  const removeIngredientFromArray = () => {
    const newArray = [...ingredients.slice(0, -1)];
    setIngredients(newArray);
  };

  const removeIngredientById = id => {
    const newArray = ingredients.filter(el => el.id !== id);
    setIngredients(newArray);
  };

  const onSearchChange = async text => {
    console.log(text);
    try {
      if (text === '') {
        return;
      }
      await getFilteredIngredients(text).then(data => {
        setAllIngredientsAPI(data.data);
        // console.log(allIngredientsAPI);
        const opt = allIngredientsAPI.map(item => {
          return { value: item.ttl, label: item.ttl };
        });
        // console.log(opt);
        setOptions(opt);
        // console.log(options);
      });
    } catch (error) {}
  };

  const handleTitleChange = async (id, title) => {
    // let array = [];
    // setIngredients(allIngredientsAPI.find(item => item.ttl === title));
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
    // onKeyDown={handleAddIngredient}
    // onMouseMove={handleAddIngredient}
    // onMouseLeave={handleAddIngredient}
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
              titleOptions={options}
              onTitleChange={handleTitleChange}
              onQuantityChange={handleQuantityChange}
              onWeightChange={handleWeightChange}
              removeIngredientById={removeIngredientById}
              onSearchChange={onSearchChange}
            />
          </IngredientsItem>
        ))}
      </IngredientsList>
    </IngredientsSection>
  );
};
