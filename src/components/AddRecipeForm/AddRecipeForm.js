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

  const [formFail, setFormFail] = useState({
    image: null,
  });
  console.log(formFail);

  const handleIngredientsChange = ingredients => {
    setIngredientsForRecipe(ingredients);
  };

  const handleImageChange = event => {
    const [file] = event.target.files;
    if (file) {
      setFormFail(URL.createObjectURL(file));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const files = e.target.elements[0].files[0];

    const formData = new FormData();
    formData.append('img', files);
    formData.append('title', recipeTitle);
    formData.append('about', recipeAbout);
    formData.append('category', category);
    formData.append('time', `${cookingTime} min`);
    formData.append('ingredients', ingredientsForRecipe);
    formData.append('instructions', preparation);
    formData.append('description', recipeAbout);
    console.log(formData.getAll('img'));

    addRecipeAPI(formData);
  };

  const theme = store.theme;

  return (
    <MainWrapper>
      <RecipeForm onSubmit={handleSubmit}>
        <AddRecepiSection>
          <div>
            <label htmlFor="file" id="labelFile">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />

              <svg width="50" height="50">
                <use href={icons + '#icon-img'} alt="ico"></use>
              </svg>
            </label>
            {formFail ? (
              <img src={formFail.image} alt="" width={100} />
            ) : (
              <div>
                <label htmlFor="file" id="labelFile">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <svg width="50" height="50">
                    <use href={icons + '#icon-img'} alt="ico"></use>
                  </svg>
                </label>
              </div>
            )}
          </div>
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
