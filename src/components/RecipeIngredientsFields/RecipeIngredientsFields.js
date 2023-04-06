import * as React from 'react';
// import { useDispatch } from 'react-redux';

export const RecipeIngredientsFields = () => {
  //   const dispatch = useDispatch();

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //   };
  return (
    <>
      <h2>Ingredients</h2>
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
  );
};
