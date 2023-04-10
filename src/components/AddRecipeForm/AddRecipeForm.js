import * as React from 'react';
import { useState } from 'react';

import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';

import {
  BtnAdd,
  SectionInput,
  SectionSelect,
  SectionRecipePreparationFields,
  SectionTitle,
  SectionTextArea,
} from 'components/AddRecipeForm/AddRecipeForm.styled';

const AddRecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeAbout, setRecipeAbout] = useState('');
  const [category, setCategory] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [preparation, setPreparation] = useState('');
  const [recipe, setRecipe] = useState({
    title: recipeTitle,
    about: recipeAbout,
    category: category,
    time: `${cookingTime} min`,
    preparation: preparation,
    ingredients: [],
  });

  console.log(recipe);
  const [ingredientsForRecipe, setIngredientsForRecipe] = useState([]);
  const [formData, setFormData] = useState({
    image: null,
  });

  const handleIngredientsChange = ingredients => {
    setIngredientsForRecipe(ingredients);
  };

  const handleImageChange = event => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setRecipe({
      title: recipeTitle,
      about: recipeAbout,
      category: category,
      time: `${cookingTime} min`,
      preparation: preparation,
      ingredients: ingredientsForRecipe,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />
      <SectionInput
        // required
        name="title"
        type="text"
        label="RecipeTitle"
        value={recipeTitle}
        onChange={e => setRecipeTitle(e.target.value)}
        placeholder="Enter item title"
      ></SectionInput>
      <SectionInput
        // required
        name="about"
        type="text"
        label="RecipeAbout"
        value={recipeAbout}
        onChange={e => setRecipeAbout(e.target.value)}
        placeholder="Enter about recipe"
      ></SectionInput>
      <div>
        <p>Category</p>
        <SectionSelect
          // required
          id="category"
          name="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="Beef">Beef</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Dessert">Dessert</option>
          <option value="Dinner">Dinner</option>
          <option value="Fish">Fish</option>
          <option value="Goat">Goat</option>
          <option value="Lamb">Lamb</option>
          <option value="Pork">Pork</option>
          <option value="Supper">Supper</option>
        </SectionSelect>
      </div>
      <div>
        <p>Cooking time</p>
        <SectionSelect
          // required
          id="cookingTime"
          name="cookingTime"
          value={cookingTime}
          onChange={e => setCookingTime(e.target.value)}
        >
          <option value="5">5 min</option>
          <option value="15">15 min</option>
          <option value="30">30 min</option>
          <option value="45">45 min</option>
          <option value="60">60 min</option>
          <option value="90">90 min</option>
          <option value="120">120 min</option>
        </SectionSelect>
      </div>

      <RecipeIngredientsList onIngredientsChange={handleIngredientsChange} />

      <SectionRecipePreparationFields>
        <SectionTitle>Recipe Preparation</SectionTitle>
        <SectionTextArea
          type="text"
          id="myrecipe"
          name="myrecipe"
          placeholder="Enter recipe"
          // value={recipe}
          onChange={e => setPreparation(e.target.value)}
        ></SectionTextArea>
      </SectionRecipePreparationFields>
      <BtnAdd type="submit">Add</BtnAdd>
    </form>
  );
};
export default AddRecipeForm;
