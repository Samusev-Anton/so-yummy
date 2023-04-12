import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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
export const ItemCategories = styled.li`
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
  @media (min-width: 1280px) {
    gap: 14px;
  }

`;

export const ItemMeal = styled.li`
`

export const BtnRecipesLink = styled(NavLink)`
  text-decoration:none;

  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #FAFAFA;
  padding: 10px 24px;
  background-color: #8BAA36;
  cursor: pointer;
  float: right;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #23262A;
  }
`;
export const BtnCategoriesOther = styled(NavLink)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  border:  2px solid #8BAA36;
  background-color: #FAFAFA;
  border-radius: 30px 80px ;
  color: #22252A;
  cursor: pointer;
  padding: 14px 32px; 
  margin-bottom: 100px;
  margin-top:40px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display:block;
margin-left: auto;
margin-right: auto;
text-decoration:none;
width: 195px;
  &:hover {
    color: #FAFAFA;
    background-color: #8BAA36;
  }
  @media (min-width: 768px) {
    padding: 20px 52px;
    font-size: 16px;
    line-height: 24px;
    width:239px;
   
  }
  @media (min-width: 1280px) {
    padding: 20px 52px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 118px;
  }
`;

