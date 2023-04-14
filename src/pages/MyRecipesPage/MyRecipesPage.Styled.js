import styled from 'styled-components';

export const FavoritePageThumb = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

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

export const FailNotification = styled.p`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 200px;
  font-size: 20px;
  color: ${p => (p.mode === 'light' ? `#3e4462` : `#fafafa`)};
`;
