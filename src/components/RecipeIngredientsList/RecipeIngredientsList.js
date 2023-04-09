import * as React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Ingredient } from 'components/Ingredient/Ingredient';
import { SectionTitle } from 'components/AddRecipeForm/AddRecipeForm.styled';

export const RecipeIngredientsList = ({ addIngredient }) => {
  const [id, setId] = useState(nanoid());
  const [ingredients, setIngredients] = useState([]);

  const addIngredientToArray = () => {
    setId(nanoid());
    const newObject = { id: id, quantity: '', weight: '' };
    setIngredients([...ingredients, newObject]);
    addIngredient([...ingredients, newObject]);
  };

  const removeIngredientFromArray = () => {
    const newArray = [...ingredients.slice(0, -1)];
    setIngredients(newArray);
    addIngredient([...ingredients]);
  };

  const removeIngredientById = id => {
    const newArray = ingredients.filter(el => el.id !== id);
    setIngredients(newArray);
  };

  const handleWeightChange = (id, weight) => {
    setIngredients(
      ingredients.map(el => (el.id === id ? { ...el, weight } : el))
    );
  };

  const handleQuantityChange = (id, quantity) => {
    setIngredients(
      ingredients.map(el => (el.id === id ? { ...el, quantity } : el))
    );
  };

  return (
    <>
      <SectionTitle>Ingredients</SectionTitle>
      <button onClick={addIngredientToArray}>+</button>
      <p>{ingredients.length}</p>
      <button onClick={removeIngredientFromArray}>-</button>
      <ul>
        {ingredients.map(el => (
          <li key={el.id}>
            <Ingredient
              {...el}
              id={el.id}
              weight={el.weight}
              quantity={el.quantity}
              onWeightChange={handleWeightChange}
              onQuantityChange={handleQuantityChange}
              removeIngredientById={removeIngredientById}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
