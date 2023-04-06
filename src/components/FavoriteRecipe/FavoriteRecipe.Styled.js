import styled from 'styled-components';

export const FavRecipeItem = styled.li`
  padding: 40px;
  /* background-color: #1fffff; */
  border-radius: 8px;
  display: flex;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeImage = styled.img`
  width: 318px;
  height: 324px;
  margin-right: 40px;
  border-radius: 8px;
`;

export const RecipeTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.24px;
  margin-bottom: 50px;
  color: #3e4462;
`;

export const RecipeDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #23262a;
`;

export const RecipePrepTime = styled.p`
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  margin: 0;
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ebf3d4;
  border: none;
  border-radius: 4px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #333;
    width: 16px;
    height: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SeeRecipe = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ebf3d4;
  border: none;
  border-radius: 4px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #333;
    width: 16px;
    height: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;
