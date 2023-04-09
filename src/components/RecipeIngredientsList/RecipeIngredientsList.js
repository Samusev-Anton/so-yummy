import * as React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Ingredient } from 'components/Ingredient/Ingredient';
import { SectionTitle } from 'components/AddRecipeForm/AddRecipeForm.styled';

export const RecipeIngredientsList = ({ onIngredientsChange }) => {
  const [id, setId] = useState(nanoid());
  const [ingredients, setIngredients] = useState([]);

  const addIngredientToArray = () => {
    setId(nanoid());
    const newObject = { id: id, title: '', quantity: '', weight: '' };
    setIngredients([...ingredients, newObject]);
  };

  const handleAddIngredient = () => {
    onIngredientsChange([...ingredients]);
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
    <div
      onKeyDown={handleAddIngredient}
      onMouseMove={handleAddIngredient}
      onMouseLeave={handleAddIngredient}
    >
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
              title={el.title}
              weight={el.weight}
              quantity={el.quantity}
              onNameChange={handleTitleChange}
              onQuantityChange={handleQuantityChange}
              onWeightChange={handleWeightChange}
              removeIngredientById={removeIngredientById}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
