/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { addRecipesAPI } from './services/API/Recipes/addRecipesAPI';
import { addRecipeAPI } from '../../services/API/Recipes';
import Select from 'react-select';
import { store } from '../../redux/store';
import { getCategories } from '../../redux/selectors'

import { FollowUs } from 'components/FollowUs/FollowUs';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { stylesSelect } from './selectStyles';
import { categoriesOptionsList } from '../../utils/categoriesOptionsList';
import { timeOptionsList } from '../../utils/timeOptionsList';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';

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
  TitleFollowUs,
  PopularTitle,
  Wrapper,
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
  console.log(formFail)

  const handleIngredientsChange = ingredients => {
    setIngredientsForRecipe(ingredients);
  };

  const handleImageChange = event => {
    const [file] = event.target.files;
    if (file) {
      setFormFail(URL.createObjectURL(file));
    }
    // setFormFail(event.target.files[0]);
    // const formData = new FormData();
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
  const optionsCategories = useSelector(getCategories);

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

            ) :
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
            }
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
              style={{ paddingTop: "40px" }}
              name="about"
              type="text"
              label="RecipeAbout"
              value={recipeAbout}
              onChange={e => setRecipeAbout(e.target.value)}
              placeholder="Enter about recipe"
            ></input>
            <InputsWithSelectWrapper>
              <SelectComp localTheme={theme}>
                <p style={{ padding: "40px 0 18px 0" }}>Category</p>
                <Select
                  styles={stylesSelect(theme)}
                  id="category"
                  name="category"
                  options={categoriesOptionsList(optionsCategories)}
                  value={category}
                  onChange={e => setCategory(e.target)}
                >
                </Select>
              </SelectComp>
            </InputsWithSelectWrapper>
            <InputsWithSelectWrapper>
              <SelectComp localTheme={theme}>
                <p style={{ padding: "40px 0 18px 0" }}>Cooking time</p>
                <Select
                  styles={stylesSelect(theme)}
                  id="cookingTime"
                  name="cookingTime"
                  options={timeOptionsList()}
                  value={cookingTime}
                  onChange={e => setCookingTime(e.target)}
                >
                </Select>
              </SelectComp>
            </InputsWithSelectWrapper>
          </InputsWrapper>
        </AddRecepiSection>

        <RecipeIngredientsList onIngredientsChange={handleIngredientsChange} />

        <RecepieSection>
          <PopularTitle>Recipe Preparation</PopularTitle>
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
        <TitleFollowUs>Follow us</TitleFollowUs>
        <FollowUs></FollowUs>
        <PopularRecipe />
      </PopularSection>
    </MainWrapper>
  );
};
export default AddRecipeForm;
