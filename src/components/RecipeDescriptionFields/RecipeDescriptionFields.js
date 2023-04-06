import * as React from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export const RecipeDescriptionFields = () => {
  const [formData, setFormData] = useState({
    image: null,
  });

  const handleImageChange = event => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send formData object to backend using an API or other method
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
      <input placeholder="Enter item title"></input>
      <input placeholder="Enter about recipe"></input>
      <div>
        <input placeholder="Category"></input>
        <select id="weight" name="weight" defaultValue="Breakfast">
          <option value="tbs" selected>
            tbs
          </option>
          <option value="tsp">tsp</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
        </select>
      </div>
      <div>
        <input placeholder="Cooking time"></input>
        <select id="weight" name="weight" defaultValue="Breakfast">
          <option value="tbs" selected>
            tbs
          </option>
          <option value="tsp">tsp</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
        </select>
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

// export const RecipeDescriptionFields = () => {
//   //   const dispatch = useDispatch();

//   //   const handleSubmit = event => {
//   //     event.preventDefault();
//   //   };
//   return (
//     <>
//           <h2 hidden>Recipe description</h2>

//       <form>
//         <input placeholder="Enter item title"></input>
//         <input placeholder="Enter about recipe"></input>
//         <div>
//           <input placeholder="Category"></input>
//           <select id="weight" name="weight">
//             <option value="tbs" selected>
//               tbs
//             </option>
//             <option value="tsp">tsp</option>
//             <option value="kg">kg</option>
//             <option value="g">g</option>
//           </select>
//         </div>
//         <div>
//           <input placeholder="Cooking time"></input>
//           <select id="weight" name="weight">
//             <option value="tbs" selected>
//               tbs
//             </option>
//             <option value="tsp">tsp</option>
//             <option value="kg">kg</option>
//             <option value="g">g</option>
//           </select>
//         </div>
//       </form>
//     </>
//   );
// };
