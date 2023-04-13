import * as React from 'react';
// import { useState } from 'react';
import Select from 'react-select';
import IconButton from '@mui/material/IconButton';
import {
  InputUnitValue,
  ValueInputWrapper,
} from '../../components/AddRecipeForm/AddRecipeForm.styled';
import { stylesIngredient, stylesUnit } from '../AddRecipeForm/selectStyles';

export const Ingredient = ({
  id,
  title,
  weight,
  quantity,
  onTitleChange,
  onWeightChange,
  onQuantityChange,
  removeIngredientById,
  localTheme,
  theme,
}) => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [dropdownOptions, setDropdownOptions] = useState([]);

  const handleTitleChange = e => {
    onTitleChange(id, e.target);
  };

  const handleQuantityChange = e => {
    onQuantityChange(id, e.target.value);
  };

  const handleWeightChange = e => {
    onWeightChange(id, e.target);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const ingredientOptions = [
    { value: 'Chicken', label: 'Chicken' },
    { value: 'Salmon', label: 'Salmon' },
    { value: 'Apple Cider Vinegar', label: 'Apple Cider Vinegar' },
    { value: 'Asparagus', label: 'Asparagus' },
    { value: 'Aubergine', label: 'Aubergine' },
    { value: 'Bacon', label: 'Bacon' },
    { value: 'Basil', label: 'Basil' },
    { value: 'Pork', label: 'Pork' },
    { value: 'Broccoli', label: 'Broccoli' },
    { value: 'Cacao', label: 'Cacao' },
  ];
  const options = [
    { value: 'tbs', label: 'tbs' },
    { value: 'tsp', label: 'tsp' },
    { value: 'kg', label: 'kg' },
    { value: 'g', label: 'g' },
  ];

  return (
    <>
      <Select
        styles={stylesIngredient(theme, localTheme)}
        options={ingredientOptions}
        id="title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={() => onTitleChange(id, title)}
        onKeyDown={handleKeyDown}
        placeholder="Ingredient name"
      ></Select>
      <ValueInputWrapper>
        <InputUnitValue
          id="quantity"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          onBlur={() => onQuantityChange(id, quantity)}
          onKeyDown={handleKeyDown}
          placeholder="Quantity"
        ></InputUnitValue>
        <Select
          styles={stylesUnit(theme, localTheme)}
          options={options}
          id="weight"
          name="weight"
          value={weight}
          onChange={handleWeightChange}
          onBlur={() => onWeightChange(id, weight)}
          onKeyDown={handleKeyDown}
        ></Select>
      </ValueInputWrapper>
      <IconButton onClick={() => removeIngredientById(id)}>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0625 4.4375L3.9375 14.5625"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0625 14.5625L3.9375 4.4375"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>
    </>
  );
};
