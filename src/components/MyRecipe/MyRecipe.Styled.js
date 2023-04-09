import styled from 'styled-components';

export const FavRecipeItem = styled.li`
  width: 100%;
  position: relative;
  padding: 40px;
  background-color: #ffffff; // shuld be #ffffff, #fafafa applied temporarily until #fafafa is not applied to background globally
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
  margin-top: 0px;
  margin-bottom: 50px;
  color: #3e4462;
`;

export const RecipeDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #23262a;
  margin-right: 164px;
`;

export const RecipePrepTime = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: -0.24px;
  margin: 0;
  color: #3e4462;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 44px;
  height: 44px;
  background-color: #8baa36;
  border: none;
  border-radius: 4px;

  /* svg {
    fill: #22252a;
    width: 18px;
    height: 20px;
  } */
  &:hover {
    cursor: pointer;
  }
`;

export const SeeRecipeBtn = styled.button`
  &:hover {
    background-color: #22252a;
    color: #fafafa;
  }
  border: none;
  background-color: #8baa36;
  border-radius: 24px 44px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  color: #fafafa;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  height: 54px;
  width: 160px;
  /* @media (min-width: 768px) {
    height: 57px;
    width: 161px;
  }
  @media (min-width: 1280px) {
    height: 70px;
  } */
`;

export const FavRecipeTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
