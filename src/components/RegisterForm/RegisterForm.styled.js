import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import { ReactComponent as MailIcon } from '../../images/welcome-pic/icon-mail.svg';
import { ReactComponent as UserIcon } from '../../images/welcome-pic/icon-person.svg';
import { ReactComponent as PasswordIcon } from '../../images/welcome-pic/icon-pass.svg';
import { theme } from '../../theme';

export const FormAuth = styled(Form)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  margin: -35px auto 18px auto;
  padding: 40px 28px;
  width: 100%;

  border-radius: 30px;
  background-color: #2a2c36;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 500px;
    padding: 44px 50px;
    margin: -10px auto 18px auto;
  }
  @media screen and (min-width: 1281px) {
    width: 500px;
    padding: 44px 50px;
  }
`;

export const TitleForm = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-bottom: 18px;

  color: #fafafa;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 32px;
  }
`;

export const BoxForForm = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    gap: 26px;
  }
`;

export const BoxForField = styled.div`
  box-sizing: border-box;
  position: relative;

  display: flex;
  flex-direction: column;

  isolation: isolate;
  opacity: 0.8;

  transition: ${theme.transition.cubicBezier};

  &:hover {
    opacity: 1;
  }
`;

export const FormField = styled(Field)`
  box-sizing: border-box;
  font-family: 'Poppins';
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid ${({ color }) => color};
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;

  font-size: 18px;
  line-height: 1.5px;

  letter-spacing: -0.02em;

  &::placeholder {
    font-family: 'Poppins';

    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: #ffffff;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 12px 16px 12px 46px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #2a2c36 inset !important;
    -webkit-text-fill-color: #ffffff !important;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;

  width: 100%;
  height: 45px;
  margin-top: 28px;
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
    margin-top: 50px;
  }
  &:hover:not([disabled]),
  :focus:not([disabled]) {
    color: #22252a;
  }
  &[disabled] {
    opacity: 0.7;
  }
`;

export const Warning = styled.div`
  display: block;
  font-family: 'Poppins';

  position: absolute;
  bottom: -19px;
  left: 2px;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ color }) => color};

  @media screen and (min-width: 768px) {
    font-size: 14px;

    bottom: -22px;
  }
`;

export const LinkTo = styled(Link)`
  display: block;
  color: #fafafa;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;

  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    color: #8baa36;
  }
`;

export const BoxForIcon = styled.div`
  width: 15px;
  height: 15px;

  top: 21px;
  left: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;

    left: 18px;
    top: 18px;
  }
`;

export const EmailIcon = styled(MailIcon)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  opacity: 80%;

  fill: none;
  stroke: ${({ stroke }) => stroke};
`;

export const NameIcon = styled(UserIcon)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  opacity: 80%;

  fill: none;
  stroke: ${({ stroke }) => stroke};
`;

export const PassIcon = styled(PasswordIcon)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  opacity: 80%;

  fill: none;
  stroke: ${({ stroke }) => stroke};
`;
