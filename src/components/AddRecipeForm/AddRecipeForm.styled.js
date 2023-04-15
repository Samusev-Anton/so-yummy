import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

export const MainWrapper = styled.div`
  display: unset;
  gap: 100px;
  padding-bottom: 200px;

  @media (min-width: 768px) {
    display: unset;
  }
  @media (min-width: 1280px) {
    display: flex;
  }
`;

export const RecipeForm = styled.form`
  width: 100%;

  button {
    cursor: pointer;
  }

  .css-l4u8b9-MuiInputBase-root-MuiInput-root::after {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.mainAccent}`};
  }

  margin-bottom: 72px;

  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 0px;
  }
`;

export const IngredientsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddRecepiSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: unset;
    gap: 32px;
    align-items: flex-start;
  }

  input {
    padding-bottom: 18px;
  }

  label[id='labelFile'] {
    width: 279px;
    height: 268px;
    background-color: #8baa36;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    overflow: hidden;
    background-image: ${({ path }) => (path ? `url(${path})` : 'unset')};
    background-size: cover;

    @media (min-width: 1280px) {
      width: 357px;
      height: 344px;
    }
  }

  input[type='file'] {
    ${
      '' /* width: 0;
    height: 0; */
    }
    opacity: 0;
    position: absolute;
    ${'' /* z-index: -1; */}
    display: block;
    padding: 0;
  }
`;

export const SelectComp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreyBg};

  p {
    font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};
    color: ${p => p.theme.colors.searchSelectText};
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreyBg};
    font-size: 14px;
    line-height: 1.3;
    color: #000000;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }

    @media (min-width: 1280px) {
      font-size: 16px;
      line-height: 1.5;
    }

    &::placeholder {
      opacity: 1;
      color: ${p => p.theme.colors.searchSelectText};
    }
  }
`;

export const InputsWithSelectWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const IngredientsSection = styled.div`
  margin-top: 72px;
`;

export const RecepieSection = styled.div`
  // margin-top: 100px;

  textarea {
    padding: 10px 16px;
    resize: none;
    background: #d9d9d9;
    border-radius: 6px;
    width: 100%;
    outline: none;
    border: none;
    // margin-top: 24px;
    height: 155px;
    font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};
    line-height: ${({ isMobile }) => (isMobile ? '1.3' : '1.5')};
    color: ${({ theme }) => theme.colors.mainBlack};
    font-family: inherit;
    border: ${({ theme }) => `1px solid ${theme.colors.mainGreyBg}`};

    background-color: ${p => p.theme.colors.mainGreyBg};

    @media (min-width: 768px) {
      width: 505px;
    }

    @media (min-width: 1280px) {
      width: 505px;
    }

    &::placeholder {
      opacity: 1;
      color: ${({ theme }) => theme.colors.mainBlack};
    }
  }

  button {
    margin-top: 32px;
  }
`;

export const PopularSection = styled.div`
  width: 100%;

  @media ${device.mobileOnly} {
    padding-bottom: 100px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    width: 320px;
  }
`;

export const IngredientsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:first-child {
    margin-top: 36px;
  }
  .css-1dimb5e-singleValue {
    color: ${({ localTheme }) => (localTheme === 'light' ? 'black' : 'white')};
  }

  .css-7ossxv-menu {
    color: red !important;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  // margin-top: 36px;
`;

export const ValueInputWrapperSearch = styled.div`
  display: flex;
  justify-content: flex-start;
  border: ${({ theme }) => `1px solid ${theme.colors.mainGreyBg}`};

  background-color: ${({ localTheme, theme }) => {
    return localTheme === 'light' ? 'transparent' : theme.colors.mainGreyBg;
  }};
  border-radius: 6px;

  .css-1dimb5e-singleValue {
    color: ${({ localTheme }) => {
      return localTheme === 'light' ? 'black' : 'white';
    }};
  }
`;

export const ValueInputWrapperQuantity = styled.div`
  display: flex;
  justify-content: flex-start;
  border: ${({ theme }) => `1px solid ${theme.colors.mainGreyBg}`};

  background-color: ${({ localTheme, theme }) => {
    return localTheme === 'light' ? 'transparent' : theme.colors.mainGreyBg;
  }};
  border-radius: 6px;
  margin-left: ${({ isMobile }) => (isMobile ? '14px' : '32px')};

  .css-1dimb5e-singleValue {
    color: ${({ localTheme }) => {
      return localTheme === 'light' ? 'black' : 'white';
    }};
  }
`;

export const InputUnitValue = styled.input`
  border-style: unset;
  background-color: transparent;
  display: block;
  height: 50px;
  padding: 0 8px;
  outline: none;
  width: 80px;
  color: ${({ theme }) => theme.colors.mainBlack};
`;

export const InputUnitValueQuantity = styled.input`
  border-style: unset;
  background-color: transparent;
  display: block;
  height: 50px;
  padding: 0 8px;
  outline: none;
  width: 80px;
  color: ${({ theme }) => theme.colors.mainBlack};
  text-align: right;
`;

export const PopularItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  color: inherit;
  align-items: flex-start;
  width: 100%;
  transition-property: scale, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    scale: 1.05;
  }
  &:focus,
  &:hover h2 {
    color: #8baa36;
  }
  @media ${device.tablet} {
    width: 336px;
  }
`;

export const PopularList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 200px;
  }
  @media ${device.desktop} {
    flex-direction: column;
  }
`;

export const RecepieSectionTitle = styled.h3`
  color: ${p => p.theme.colors.mainHeaderText};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  @media ${device.mobileOnly} {
    margin-bottom: 24px;
  }
  @media ${device.tablet} {
    margin-bottom: 40px;
  }
  @media ${device.desktop} {
    margin-bottom: 40px;
  }
`;

export const IngredientsSectionTitle = styled.h3`
  color: ${p => p.theme.colors.mainHeaderText};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  @media ${device.mobileOnly} {
    // margin-bottom: 24px;
  }
  @media ${device.tablet} {
    // margin-bottom: 40px;
  }
  @media ${device.desktop} {
    // margin-bottom: 40px;
  }
`;

export const PopularTitle = styled.h3`
  color: ${p => p.theme.colors.mainHeaderText};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  @media ${device.mobileOnly} {
    margin-bottom: 15px;
  }
  @media ${device.tablet} {
    margin-bottom: 40px;
  }
  @media ${device.desktop} {
    margin-bottom: 40px;
  }
`;

export const RecipeTitle = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 16px;
  line-height: ${({ theme }) => theme.lineHeights.description};
  letter-spacing: ${({ theme }) => theme.letterSpacings.subheader};
  color: ${({ theme }) => theme.colors.secondaryDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
`;

export const RecipeText = styled.p`
  margin-top: 3px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
  color: ${({ theme }) => theme.colors.mainGrey};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 12px;
  line-height: ${({ theme }) => theme.lineHeights.content};
  letter-spacing: ${({ theme }) => theme.letterSpacings.subheader};
  color: ${({ theme }) => theme.colors.mainGrey};
  @media ${device.mobileOnly} {
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const RecepiImg = styled.img`
  border-radius: 8px;
  // height: 85px;
  width: 104px;
  margin-right: 12px;
`;

export const ButtonRemoveItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  svg {
    fill: ${({ theme }) => theme.colors.mainBlack};
  }
`;

export const AddBtn = styled.button`
  border-radius: 20px 60px;

  border: 2px solid #fafafa;
  margin-top: 32px;
  padding: 14px 64px;

  font-size: 14px;
  background-color: transparent;
  text-decoration: none;
  color: #fafafa;

  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';

  &:hover {
    background-color: #fafafa;
    border: 2px solid #8baa36;
    color: #8baa36;
  }
  @media screen and (min-width: 768px) {
    padding: 14px 64px;

    font-size: 16px;
  }

  &:first-of-type {
    background-color: #22252a;
    border: none;
    &:hover {
      background-color: #8baa36;
      color: #fafafa;
    }
  }
`;
export const TitleFollowUs = styled.h3`
  display: none;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.24px;

  @media ${device.desktop} {
    display: block;
    margin-bottom: 42px;
    color: ${p => p.theme.colors.mainHeaderText};
  }
`;
