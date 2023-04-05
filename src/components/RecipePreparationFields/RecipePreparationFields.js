import * as React from 'react';
// import { useDispatch } from 'react-redux';

export const RecipePreparationFields = () => {
  //   const dispatch = useDispatch();

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //   };
  return (
    <>
      <h2>Recipe Preparation</h2>
      <form>
        <textarea
          name="myrecipe"
          //   rows="5"
          placeholder="Enter recipe"
        ></textarea>
        <button type="submit">
          Add
          {/* <svg class="subscribe-button__icon" width="24" height="24">
            <use href="./images/icons.svg#icon-send"></use>
          </svg> */}
        </button>
      </form>
    </>
  );
};
