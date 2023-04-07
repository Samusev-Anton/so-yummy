import * as React from 'react';
import { useState } from 'react';
import {
  SectionInput,
  // SectionSelectInput,
  SectionSelect,
} from 'components/RecipeDescriptionFields/RecipeDescriptionFields.styled';
// import { useDispatch } from 'react-redux';

export const RecipeDescriptionFields = () => {
  const [formData, setFormData] = useState({
    image: null,
  });
  const [category, setCategory] = useState();
  const [cookingTime, setcookingTime] = useState();

  const handleImageChange = event => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="image"></label> */}
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />
      <SectionInput placeholder="Enter item title"></SectionInput>
      <SectionInput placeholder="Enter about recipe"></SectionInput>
      <SectionSelect id="category" name="category" value={category}>
        <option>Category</option>
        <option value="tbs">tbs</option>
        <option value="tsp">tsp</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
      </SectionSelect>
      <SectionSelect
        id="cookingTime"
        name="cookingTime"
        defaultChecked="Cooking time"
        value={cookingTime}
      >
        <option>Cooking time</option>
        <option value="tbs">tbs</option>
        <option value="tsp">tsp</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
      </SectionSelect>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};
