import * as React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getRecipesIngredients } from '../../redux/selectors';
import { Ingredient } from 'components/Ingredient/Ingredient';
import { SectionTitle } from 'components/RecipePreparationFields/RecipePreparationFields.styled';

export const RecipeIngredientsList = () => {
  const [id, setId] = useState(nanoid());
  const [myArray, setMyArray] = useState([]);

  const addIngredientToArray = () => {
    setId(nanoid());
    const newObject = { id: id, quantity: '', weight: '' };
    setMyArray([...myArray, newObject]);
  };

  console.log(myArray);

  const removeIngredientFromArray = () => {
    const newArray = [...myArray.slice(0, -1)];
    setMyArray(newArray);
  };

  const removeIngredientById = id => {
    const newArray = myArray.filter(el => el.id !== id);
    setMyArray(newArray);
  };

  const handleWeightChange = (id, weight) => {
    setMyArray(myArray.map(el => (el.id === id ? { ...el, weight } : el)));
  };

  const handleQuantityChange = (id, quantity) => {
    setMyArray(myArray.map(el => (el.id === id ? { ...el, quantity } : el)));
  };

  return (
    <>
      <SectionTitle>Ingredients</SectionTitle>
      <button onClick={addIngredientToArray}>+</button>
      <button onClick={removeIngredientFromArray}>-</button>
      <ul>
        {myArray.map(el => (
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
