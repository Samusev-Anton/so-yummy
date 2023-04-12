import styled from 'styled-components';

export const item = styled.img`
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;

export const FavRecipeItem = styled.li`
  position: relative;
  display: flex;
  padding: 14px;
  width: 100%;
  border-radius: 8px;
  background-color: ${li => (li.mode === 'light' ? `#ffffff` : `#2A2C36`)};

  @media (min-width: 768px) {
    padding: 28px;
  }
  @media (min-width: 1280px) {
    padding: 40px;
  }
`;
export const RecipeImage = styled.img`
  width: 124px;
  height: 124px;
  margin-right: 14px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 228px;
    height: 232px;
    margin-right: 24px;
  }
  @media (min-width: 1280px) {
    width: 318px;
    height: 324px;
    margin-right: 40px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeTitle = styled.h3`
  max-width: 154px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-top: 0px;
  margin-bottom: 14px;
  color: ${h3 => (h3.mode === 'light' ? `#3e4462` : `#fafafa`)};

  @media (min-width: 768px) {
    max-width: 342px;
    margin-bottom: 28px;
    font-size: 24px;
  }
  @media (min-width: 1280px) {
    max-width: 690px;
    margin-bottom: 50px;
  }
`;

export const RecipeDescription = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-right: 43px;
  color: ${p => (p.mode === 'light' ? `#23262a` : `rgba(250, 250, 250, 0.6)`)};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    margin-right: 130px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    line-height: 1.33;
    margin-right: 164px;
  }
`;

export const RecipePrepTime = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;
  margin: 0;
  margin-top: 16px;
  color: ${p => (p.mode === 'light' ? `#3e4462` : `#fafafa`)};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  padding: 5px;
  top: 14px;
  right: 9px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background-color: ${button =>
    button.mode === 'light' ? `#ebf3d4` : `#1E1F28`};

  svg {
    stroke: ${button => (button.mode === 'light' ? `#22252A` : `#FAFAFA`)};
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    top: 28px;
    right: 24px;
    padding: 8px;
    width: 38px;
    height: 38px;
  }
  @media (min-width: 1280px) {
    top: 40px;
    right: 40px;
    padding: 10px;
    width: 44px;
    height: 44px;
  }
`;

export const SeeRecipeBtn = styled.button`
  position: absolute;
  right: 9px;
  bottom: 14px;
  border: none;
  border-radius: 24px 44px;
  cursor: pointer;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  width: 87px;
  height: 27px;
  color: #fafafa;
  background-color: ${button =>
    button.mode === 'light' ? `#22252a` : `#8BAA36`};

  &:hover {
    background-color: #22252a;
    color: #fafafa;
  }

  @media (min-width: 768px) {
    right: 24px;
    bottom: 28px;
    width: 138px;
    height: 45px;
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    bottom: 40px;
    right: 40px;
    width: 160px;
    height: 54px;
  }
`;

export const FavRecipeTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
