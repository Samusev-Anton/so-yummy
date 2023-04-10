import { useEffect, useState } from 'react';
import {
  RecipePreparationTitle,
  RecipePreparationBox,
  RecipeImage,
  RecipePreparationItem,
  RecipePreparationNumber,
  RecipePreparationWrap,
} from './RecipePreparation.styled.js';
import { Container } from 'components/GlobalStyles';

export const RecipePreparation = ({ recipeDescription }) => {
  const [preparation, setPreparation] = useState([]);

  useEffect(() => {
    if (Object.keys(recipeDescription).length > 0) {
      const instr = recipeDescription.instructions;
      const arr = instr.split(/\r\n/);
      const newarr = arr.filter(item => item !== ' ' || '');
      setPreparation(newarr);
    }
  }, [recipeDescription]);

  return (
    <Container>
      <RecipePreparationBox>
        <RecipePreparationWrap>
          <div>
            <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>

            <ul>
              {preparation.map((item, index) => (
                <RecipePreparationItem key={index}>
                  {item !== '' && (
                    <>
                      <RecipePreparationNumber>
                        {index + 1}
                      </RecipePreparationNumber>
                      <p>{item}</p>
                    </>
                  )}
                </RecipePreparationItem>
              ))}
            </ul>
          </div>
          <RecipeImage
            src={recipeDescription.thumb}
            alt={recipeDescription.title}
          />
        </RecipePreparationWrap>
      </RecipePreparationBox>
    </Container>
  );
};
