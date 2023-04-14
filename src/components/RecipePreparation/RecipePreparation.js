import { useEffect, useState } from 'react';
import {
  RecipePreparationTitle,
  RecipePreparationBox,
  RecipeImage,
  RecipePreparationItem,
  RecipePreparationNumber,
  RecipePreparationWrap,
  RecipePreparationText,
} from './RecipePreparation.styled.js';
import { Container } from 'components/GlobalStyles';

export const RecipePreparation = ({ recipeDescription }) => {
  const [preparation, setPreparation] = useState([]);

  useEffect(() => {
    if (Object.keys(recipeDescription).length > 0) {
      const instr = recipeDescription.instructions;
      if (typeof instr === 'string') {
        const arr = instr.split(/\r\n/);
        const newarr = arr.filter(item => item.length >= 5);
        setPreparation(newarr);
      } else {
        setPreparation(instr);
      }
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
                  <>
                    <RecipePreparationNumber>
                      {index + 1}
                    </RecipePreparationNumber>
                    <RecipePreparationText>{item}</RecipePreparationText>
                  </>
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
