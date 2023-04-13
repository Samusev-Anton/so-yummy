import styled from 'styled-components';
import { theme } from '../../theme';

export const FormAuth = styled.form`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  flex-direction: column;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const FormField = styled.input`
  box-sizing: border-box;
  font-family: 'Poppins';
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 3px solid #8baa36;
  border-radius: 6px;
  background-color: #ebf3d4;
  color: #2a2c36;

  font-size: 18px;
  line-height: 1.5px;

  letter-spacing: -0.02em;

  &::placeholder {
    font-family: 'Poppins';

    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: #2a2c36;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 12px 16px 12px 46px;
  }

  &:hover,
  &:focus {
    outline: 1px solid black;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: #2a2c36;

  text-align: center;
  margin-bottom: 15px;
`;

export const TitleForm = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-bottom: 18px;

  color: #2a2c36;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 20px;
  }
`;

export const BoxForField = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  isolation: isolate;
`;

export const Button = styled.button`
  box-sizing: border-box;

  width: 100%;
  height: 45px;
  margin: 0;
  font-size: 16px;
  text-align: center;

  border: none;
  border-radius: 10px;
  background-color: #8baa36;
  color: #fafafa;

  transition: ${theme.transition.cubicBezier};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 56px;
    margin-top: 15px;
  }
  &:hover:not([disabled]),
  :focus:not([disabled]) {
    color: #22252a;
  }
  &[disabled] {
    opacity: 0.7;
  }
`;

export const BoxForForms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const VisibilityBtn = styled.button`
  display: block;
  position: absolute;
  width: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  top: 16px;
  right: 35px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
