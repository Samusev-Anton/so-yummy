import styled from 'styled-components';

export const RecipePreparationBox = styled.div`
  padding: 50px 0 100px 0;
  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const RecipePreparationTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;

  color: ${p => p.theme.colors.secondaryDark};

  margin-bottom: 28px;
  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const RecipePreparationWrap = styled.div`
  @media (min-width: 1280px) {
    display: flex;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 40px;
  @media (min-width: 768px) {
    max-width: 433px;
    max-height: 332px;
  }

  @media (min-width: 1280px) {
    width: 433px;
    height: 332px;
    margin-top: 0;
    margin-left: 50px;
  }
`;

export const RecipePreparationItem = styled.li`
  // display: -webkit-inline-box;
  // padding: 10px;
  display: flex;

  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);

  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const RecipePreparationNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;
  padding: 10px;
  border-radius: 100px;
  background-color: #8baa36;
  margin-right: 14px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;

  color: #ffffff;
  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const RecipePreparationText = styled.div`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.preparationText};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media (min-width: 1280px) {
  }
`;
