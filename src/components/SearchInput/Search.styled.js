import styled from "styled-components";
import { Form, Field } from "formik";
import { device } from 'components/GlobalStyles';

export const FormWrap = styled(Form)`
  width: 295px;
  position: relative;
  align-item: center;
  justify-content: center;
  flex-wrap: nowrap;
  display: flex;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 362px;
    display:block;
    margin: 0;
  }
  @media ${device.desktop} {
    width: 510px;
  }
`;

export const BtnSearch = styled.button`
  &:hover {
    background-color: #22252a;
    color: #fafafa;
  }
  color: rgb(255, 255, 255);
  border: none;
  font-family: 'Poppins';
  background-color: #8baa36;
  border-radius: 24px 44px;
  position: absolute;
  right: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  height: 53px;
  width: 113px;
  @media ${device.tablet} {
    height: 57px;
    width: 161px;
  }
  @media ${device.desktop} {
    height: 70px;
  }
`;

export const Input = styled(Field)`
border: 1px solid #f0f0f0;
outline: none;
border-radius: 24px 44px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
background: ${({ theme }) => theme.colors.bodyBg};
padding: 0 0 0 32px;
height: 53px;
width: 263px;
color: ${({ theme }) => theme.colors.secondaryDark};
&:focus::placeholder {
    opacity: 0;
    animation: blink-caret 1s step-end infinite;
  }
@media ${device.tablet} {
  height: 57px;
  width: 324px;
  padding: 0 0 0 38px;
  font-size: 14px;
}
@media ${device.desktop} {
  height: 70px;
  width: 462px;
  padding: 0 0 0 48px;
  font-size: 16px;
}
`;
