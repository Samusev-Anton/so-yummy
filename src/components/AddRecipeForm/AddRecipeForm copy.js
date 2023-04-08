import * as React from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { RecipeDescriptionFields } from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from 'components/RecipePreparationFields/RecipePreparationFields';
import { BtnAdd } from 'components/AddRecipeForm/AddRecipeForm.styled';

export const AddRecipeForm = () => {
  //   const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const handleSubmitDescription = event => {
    event.preventDefault();
    console.log(event);
  };
  const handleSubmitIngredient = event => {
    event.preventDefault();
  };
  const handleSubmitPreparation = event => {
    event.preventDefault();
  };

  // function handleSearch(event) {
  //   const newSearchTerm = event.target.value;
  //   setSearchTerm(newSearchTerm);

  //   const options = fetch('ingerdients.title');

  //   const filteredOptions = options.filter(option =>
  //     option.toLowerCase().includes(newSearchTerm.toLowerCase())
  //   );
  //   setDropdownOptions(filteredOptions);
  // }

  return (
    <form>
      <RecipeDescriptionFields onSubmit={handleSubmitDescription} />
      {/* <RecipeIngredientsFields onSubmit={handleSubmitIngredient} />
      <RecipePreparationFields onSubmit={handleSubmitPreparation} /> */}
      <BtnAdd type="submit">Add</BtnAdd>
    </form>
  );
};
