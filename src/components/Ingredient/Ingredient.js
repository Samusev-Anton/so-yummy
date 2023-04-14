import * as React from 'react';
import Select from 'react-select';
import IconButton from '@mui/material/IconButton';
import {
  InputUnitValue,
  ValueInputWrapper,
} from '../../components/AddRecipeForm/AddRecipeForm.styled';
import { stylesIngredient, stylesUnit } from '../AddRecipeForm/selectStyles';

export const Ingredient = ({
  ingredient,
  removeIngredientById,
  localTheme,
  theme,
  onSearchChange,
  titleOptions,
  ingredients,
  onIngredientsChange,
}) => {
  const handleTitleChange = e => {
    const newArr = ingredients.map(item => {
      if (item.id === ingredient.id) {
        item.title = e.value;
      }
      return item;
    });
    onIngredientsChange(newArr);
  };

  const handleQuantityChange = e => {
    const newArr = [...ingredients].map(item => {
      if (item.id === ingredient.id) {
        item.quantity = e.target.value;
      }
      return item;
    });
    onIngredientsChange(newArr);
  };

  const handleWeightChange = e => {
    const newArr = [...ingredients].map(item => {
      if (item.id === ingredient.id) {
        item.weight = e.value;
      }
      return item;
    });
    onIngredientsChange(newArr);
  };

  const handleSearchChange = e => {
    onSearchChange(e.target.value);
  };

  // const handleKeyDown = e => {
  //   if (e.key === 'Enter') {
  //     e.target.blur();
  //   }
  // };

  const options = [
    { value: 'tbs', label: 'tbs' },
    { value: 'tsp', label: 'tsp' },
    { value: 'kg', label: 'kg' },
    { value: 'g', label: 'g' },
  ];

  return (
    <>
      <InputUnitValue
        id="search"
        type="text"
        onChange={handleSearchChange}
        // onBlur={() => onQuantityChange(id, quantity)}
        // onKeyDown={handleKeyDown}
        placeholder="search"
      ></InputUnitValue>
      <Select
        styles={stylesIngredient(theme, localTheme)}
        options={titleOptions}
        id="title"
        type="text"
        onChange={handleTitleChange}
        // onBlur={() => onTitleChange(id, title)}
        // onKeyDown={handleKeyDown}
        placeholder="Ingredient name"
      ></Select>
      <ValueInputWrapper>
        <InputUnitValue
          id="quantity"
          type="number"
          value={ingredient.quantity}
          onChange={handleQuantityChange}
          // onBlur={() => onQuantityChange(id, quantity)}
          // onKeyDown={handleKeyDown}
          placeholder="Quantity"
        ></InputUnitValue>
        <Select
          styles={stylesUnit(theme, localTheme)}
          options={options}
          id="weight"
          onChange={handleWeightChange}
          // onBlur={() => onWeightChange(id, weight)}
          // onKeyDown={handleKeyDown}
        ></Select>
      </ValueInputWrapper>
      <IconButton onClick={() => removeIngredientById(ingredient.id)}>
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

// import * as React from 'react';
// import { useState } from 'react';
// // import { useEffect } from 'react';
// import Select from 'react-select';
// import IconButton from '@mui/material/IconButton';
// import {
//   InputUnitValue,
//   ValueInputWrapper,
// } from '../../components/AddRecipeForm/AddRecipeForm.styled';
// import { stylesIngredient, stylesUnit } from '../AddRecipeForm/selectStyles';

// export const Ingredient = ({
//   id,
//   removeIngredientById,
//   localTheme,
//   theme,
//   onSearchChange,
//   titleOptions,
//   onIngredientsChange,
// }) => {
//   const [recipeTitle, setRecipeTitle] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [width, setWidht] = useState('');
//   // const [newIng, setNewIng] = useState('');
//   console.log(titleOptions);

//   const handleTitleChange = e => {
//     setRecipeTitle(e.value);
//     console.log(e.value);
//   };

//   const handleQuantityChange = e => {
//     setQuantity(e.target.value);
//   };

//   const handleWeightChange = e => {
//     setWidht(e.value);
//     console.log(e.value);
//   };

//   const newIngredient = {
//     ttl: recipeTitle,
//     measure: `${quantity} ${width}`,
//   };

//   // setNewIng(newIngredient);
//   console.log(newIngredient);

//   // onIngredientsChange(newIngredient);
//   // эта функция должна отправлять этот объект

//   const handleSearchChange = e => {
//     onSearchChange(e.target.value);
//   };

//   // const handleKeyDown = e => {
//   //   if (e.key === 'Enter') {
//   //     e.target.blur();
//   //   }
//   // };

//   const options = [
//     { value: 'tbs', label: 'tbs' },
//     { value: 'tsp', label: 'tsp' },
//     { value: 'kg', label: 'kg' },
//     { value: 'g', label: 'g' },
//   ];

//   return (
//     <>
//       <InputUnitValue
//         id="search"
//         type="text"
//         onChange={handleSearchChange}
//         // onBlur={() => onQuantityChange(id, quantity)}
//         // onKeyDown={handleKeyDown}
//         placeholder="search"
//       ></InputUnitValue>
//       <Select
//         styles={stylesIngredient(theme, localTheme)}
//         options={titleOptions}
//         id="title"
//         type="text"
//         value={recipeTitle}
//         onChange={handleTitleChange}
//         // onBlur={() => onTitleChange(id, title)}
//         // onKeyDown={handleKeyDown}
//         placeholder="Ingredient name"
//       ></Select>
//       <ValueInputWrapper>
//         <InputUnitValue
//           id="quantity"
//           type="number"
//           value={quantity}
//           onChange={handleQuantityChange}
//           // onBlur={() => onQuantityChange(id, quantity)}
//           // onKeyDown={handleKeyDown}
//           placeholder="Quantity"
//         ></InputUnitValue>
//         <Select
//           styles={stylesUnit(theme, localTheme)}
//           options={options}
//           id="weight"
//           name="weight"
//           value={width}
//           onChange={handleWeightChange}
//           // onBlur={() => onWeightChange(id, weight)}
//           // onKeyDown={handleKeyDown}
//         ></Select>
//       </ValueInputWrapper>
//       <IconButton onClick={() => removeIngredientById(id)}>
//         <svg
//           width="18"
//           height="19"
//           viewBox="0 0 18 19"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M14.0625 4.4375L3.9375 14.5625"
//             stroke="#333333"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M14.0625 14.5625L3.9375 4.4375"
//             stroke="#333333"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </IconButton>
//     </>
//   );
// };
