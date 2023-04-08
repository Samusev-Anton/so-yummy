import {
  RecipePreparationTitle,
  RecipePreparationBox,
  RecipeImage,
} from './RecipePreparation.styled.js';

export const RecipePreparation = ({ recipeDescription }) => {
  const instr = recipeDescription.instructions;

  //   /(?=[A-Z])/g
  // const arr = instr.split();

  //   \r\n\r\n

  return (
    <RecipePreparationBox>
      <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
      <ul>
        <li>
          <div></div>
          <p></p>
        </li>
      </ul>
      <RecipeImage
        src={recipeDescription.thumb}
        alt={recipeDescription.title}
      />
    </RecipePreparationBox>
  );
};
