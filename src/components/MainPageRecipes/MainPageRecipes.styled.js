import styled from 'styled-components';


export const TitleCatigories = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: '-0.02em';
  color: '#001833';
  margin-bottom: 32px;
  @media (min-width: 768px) {
    font-size: 44px;
    line-height: 44px;
    margin-bottom:50px
  }
`;

export const ListCatigories = styled.ul`
padding:0;
list-style: none;
display: flex;
flex-direction: column;
gap: 100px; 
`
export const ItemCategories=styled.li`
`
export const ListMeals = styled.ul`
padding:0;
 list-style: none;
 margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0;
  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    gap: 14px;
  }

`;

export const ItemMeal = styled.li`
`