import * as React from 'react';
import Select from 'react-select';
import { useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { RecipeDescriptionFields } from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
// import { RecipeIngredientsFields } from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
// import { RecipePreparationFields } from 'components/RecipePreparationFields/RecipePreparationFields';
import { BtnAdd } from 'components/AddRecipeForm/AddRecipeForm.styled';
import {
  SectionInput,
  // SectionSelectInput,
  SectionSelect,
} from 'components/RecipeDescriptionFields/RecipeDescriptionFields.styled';
import {
  SectionRecipePreparationFields,
  SectionTitle,
  SectionTextArea,
} from 'components/RecipePreparationFields/RecipePreparationFields.styled';

// const optionsCategory = [
//   { value: 'Beef', label: 'Beef' },
//   { value: 'Dessert', label: 'Dessert' },
//   { value: 'Lamb', label: 'Lamb' },
//   { value: 'Fish', label: 'Lamb' },
//   { value: 'Lamb', label: 'Lamb' },
//   { value: 'Lamb', label: 'Lamb' },
//   { value: 'Lamb', label: 'Lamb' },
//   { value: 'Lamb', label: 'Lamb' },
// ];

// const optionsCookingTime = [
//   { value: '1min', label: '1min' },
//   { value: '2min', label: '2min' },
//   { value: '5min', label: '3min' },
// ];

export const AddRecipeForm = () => {
  //   const dispatch = useDispatch();

  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeAbout, setRecipeAbout] = useState('');
  const [category, setCategory] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [preparation, setPreparation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [formData, setFormData] = useState({
    image: null,
  });
  const [recipe, setRecipe] = useState({
    title: recipeTitle,
    about: recipeAbout,
    category: category,
    time: cookingTime,
  });

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
    });
    console.log(recipe);
    // reset();
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

  const reset = () => {
    setRecipeTitle('');
    setRecipeAbout('');
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
        required
        name="title"
        type="text"
        label="RecipeTitle"
        value={recipeTitle}
        onChange={e => setRecipeTitle(e.target.value)}
        placeholder="Enter item title"
      ></SectionInput>
      <SectionInput
        required
        name="about"
        type="text"
        label="RecipeAbout"
        value={recipeAbout}
        onChange={e => setRecipeAbout(e.target.value)}
        placeholder="Enter about recipe"
      ></SectionInput>
      <SectionSelect
        required
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
      <SectionSelect
        required
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
      {/* <Select
        options={optionsCategory}
        name="category"
        value={recipe}
        onChange={e => setCategory(e.target.value)}
      />
      <Select
        options={optionsCookingTime}
        name="cookingTime"
        value={recipe}
        onChange={e => setRecipe(e.target.value)}
      /> */}
      <>
        <SectionTitle>Ingredients</SectionTitle>
        <div>
          <input></input>
          <select id="weight" name="weight" defaultValue="g">
            <option value="tbs" selected>
              tbs
            </option>
            <option value="tsp">tsp</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
          </select>
          <button>
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
          </button>
        </div>
      </>
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
