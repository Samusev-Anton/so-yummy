import styled from 'styled-components';
import { device } from 'components/GlobalStyles';
import { Form, Field } from 'formik';

export const FormSubscribe = styled(Form)`
  margin: 0 auto;
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;

  @media ${device.mobileOnly} {
    width: 204px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 38px;
    justify-content: center;
    grid-row: 2;
    grid-column: 1 / span 2;
  }
  @media ${device.desktop} {
    flex-direction: column;
    margin: 0;
    height: auto;
    width: 339px;
  }
`;

export const EmailField = styled.div`
  display: flex;
  height: 38px;
  padding: 0px 15px;
  position: relative;
  align-items: center;
  // border: none;
  border-radius: 6px;
  margin-bottom: 8px;
  // border: 1px solid rgba(250, 250, 250, 0.16);
  &:focus,
  &:hover {
    border: 1px solid rgba(250, 250, 250, 1);
  }
  @media ${device.tablet} {
    width: 259px;
    height: 50px;
    margin-right: 12px;
  }
  @media ${device.desktop} {
    width: 338px;
    height: 60px;
    margin-bottom: 16px;
  }
`;

export const TextField = styled(Field)`
  width: 100%;
  padding: 0px;
  background-color: transparent;
  margin-left: 12px;
  color: #fafafa;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  border: none;
  &:focus,
  &:hover {
    outline-style: none;
    outline: none;
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 21px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const SubscribeTitle = styled.h3`
  display: none;
  @media ${device.desktop} {
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #fafafa;
    margin: 0px;
    margin-bottom: 14px;
  }
`;

export const SubscribeText = styled.p`
  display: none;
  @media ${device.desktop} {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #fafafa;
    margin: 0px;
    margin-bottom: 28px;
  }
`;

export const SubscribeButton = styled.button`
  width: 100%;
  margin: 0 auto;
  padding-top: 11px;
  padding-bottom: 11px;
  background-color: #8baa36;
  border-radius: 6px;
  &:focus,
  &:hover {
    color: #22252a;
    cursor: pointer;
  }
  &:disabled {
    color: rgba(250, 250, 250, 0.5);
    background-color: #22252a;
    border: 1px solid rgba(250, 250, 250, 0.16);
    cursor: not-allowed;
  }
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #fafafa;
  // border: none;
  height: 38px;
  @media ${device.tablet} {
    width: 171px;
    font-size: 16px;
    line-height: 18px;
    margin: 0;
    height: 50px;
  }
  @media ${device.desktop} {
    width: 339px;
    height: 60px;
  }
`;

export const IconLetterStyle = styled.div`
  display: flex;
  @media ${device.mobileOnly} {
    height: 12px;
  }
  @media ${device.mobile} {
    height: 12px;
  }
  @media ${device.tablet} {
    height: 16px;
  }
  @media ${device.desktop} {
  }
`;

export const IconLetter = ({ errors, touched, email }) => {
  return (
    <svg
      // width="100%"
      height="100%"
      viewBox="0 0 18 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.6 1H15.4C15.824 1.00119 16.2302 1.1596 16.53 1.44065C16.8298 1.7217 16.9987 2.10254 17 2.5V11.5C16.9987 11.8975 16.8298 12.2783 16.53 12.5593C16.2302 12.8404 15.824 12.9988 15.4 13H2.6C2.17604 12.9988 1.76981 12.8404 1.47003 12.5593C1.17024 12.2783 1.00127 11.8975 1 11.5V2.5C1.00127 2.10254 1.17024 1.7217 1.47003 1.44065C1.76981 1.1596 2.17604 1.00119 2.6 1V1Z"
        style={{
          stroke: errors && touched && email !== '' ? '#E74A3B' : '#FAFAFA',
        }}
        fill="transparent"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 2.49951L9 7.74951L1 2.49951"
        style={{
          stroke: errors && touched && email !== '' ? '#E74A3B' : '#FAFAFA',
        }}
        fill="transparent"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WarningMessage = styled.div`
  position: absolute;
  left: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: #e74a3b;

  @media ${device.mobileOnly} {
    top: -50%;
  }
  @media ${device.tablet} {
    top: 100%;
  }
`;

export const WarningSvg = styled.svg`
  height: 20px;
`;
