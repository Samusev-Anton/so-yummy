import styled from 'styled-components';

export const FavoritePageThumb = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 191px;

  @media (min-width: 768px) {
    margin-bottom: 205px;
  }
`;

export const RecipeList = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-direction: column;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    gap: 40px;
  }
  @media (min-width: 1280px) {
    gap: 50px;
  }
`;
