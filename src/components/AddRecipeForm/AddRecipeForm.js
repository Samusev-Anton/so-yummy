/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState } from 'react';
// import { addRecipesAPI } from './services/API/Recipes/addRecipesAPI';
import { addRecipeAPI } from '../../services/API/Recipes';
// import Select from 'react-select';
import { store } from '../../redux/store';

import { FollowUs } from 'components/FollowUs/FollowUs';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';

import {
  AddRecepiSection,
  InputsWrapper,
  InputsWithSelectWrapper,
  SelectComp,
  RecipeForm,
  PopularSection,
  MainWrapper,
  RecepieSection,
  AddBtn,
} from 'components/AddRecipeForm/AddRecipeForm.styled';
import icons from '../../images/sprite.svg';

const AddRecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeAbout, setRecipeAbout] = useState('');
  const [category, setCategory] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [preparation, setPreparation] = useState('');
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
    const recipe = {
      title: recipeTitle,
      about: recipeAbout,
      category: category,
      time: `${cookingTime} min`,
      preparation: preparation,
      ingredients: ingredientsForRecipe,
    };
    addRecipeAPI(recipe);
  };

  const theme = store.theme;

  return (
    <MainWrapper>
      <RecipeForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file" id="labelFile">
            <svg width="50" height="50">
              <use href={icons + '#icon-img'} alt="ico"></use>
            </svg>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <AddRecepiSection>
          <InputsWrapper localTheme={theme}>
            <input
              // required
              name="title"
              type="text"
              label="RecipeTitle"
              value={recipeTitle}
              onChange={e => setRecipeTitle(e.target.value)}
              placeholder="Enter item title"
            ></input>
            <input
              // required
              name="about"
              type="text"
              label="RecipeAbout"
              value={recipeAbout}
              onChange={e => setRecipeAbout(e.target.value)}
              placeholder="Enter about recipe"
            ></input>
            <InputsWithSelectWrapper>
              <SelectComp localTheme={theme}>
                <p>Category</p>
                <select
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
                </select>
              </SelectComp>
            </InputsWithSelectWrapper>
            <InputsWithSelectWrapper>
              <SelectComp localTheme={theme}>
                <p>Cooking time</p>
                <select
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
                </select>
              </SelectComp>
            </InputsWithSelectWrapper>
          </InputsWrapper>
        </AddRecepiSection>

        <RecipeIngredientsList onIngredientsChange={handleIngredientsChange} />

        <RecepieSection>
          <h2>Recipe Preparation</h2>
          {/* <input
              type="text"
              id="myrecipe"
              name="myrecipe"
              placeholder="Enter recipe"
              // value={recipe}
              onChange={e => setPreparation(e.target.value)}
            ></input> */}
          <textarea
            name="recipe"
            placeholder="Enter recipe"
            onChange={e => setPreparation(e.target.value)}
          ></textarea>
        </RecepieSection>
        <AddBtn type="submit">Add</AddBtn>
      </RecipeForm>

      <PopularSection>
        <h3>Follow us</h3>
        <FollowUs></FollowUs>
      </PopularSection>
    </MainWrapper>
  );
};
export default AddRecipeForm;
