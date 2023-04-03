import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

export const Form = styled.form`
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
    height: 50px;
    justify-content: center;
  }
  @media ${device.desktop} {
    flex-direction: column;
    margin: 0;
    margin-left: 150px;
    height: auto;
  }
`;

export const EmailField = styled.div`
  display: flex;
  height: 38px;
  padding: 0px;
  align-items: center;
  border: none;
  border-radius: 6px;
  outline: 1px solid rgba(250, 250, 250, 0.16);
  margin-bottom: 8px;
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

export const TextField = styled.input`
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
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #fafafa;
  border: none;
  @media ${device.tablet} {
    width: 171px;
    font-size: 16px;
    line-height: 18px;
    margin: 0;
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
    margin-left: 14px;
  }
  @media ${device.mobile} {
    height: 12px;
    margin-left: 14px;
  }
  @media ${device.tablet} {
    height: 16px;
    margin-left: 15px;
  }
  @media ${device.desktop} {
    margin-left: 15.5px;
  }
`;

export const IconLetter = () => {
  return (
    <svg
      // width="100%"
      height="100%"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.6 1H15.4C15.824 1.00119 16.2302 1.1596 16.53 1.44065C16.8298 1.7217 16.9987 2.10254 17 2.5V11.5C16.9987 11.8975 16.8298 12.2783 16.53 12.5593C16.2302 12.8404 15.824 12.9988 15.4 13H2.6C2.17604 12.9988 1.76981 12.8404 1.47003 12.5593C1.17024 12.2783 1.00127 11.8975 1 11.5V2.5C1.00127 2.10254 1.17024 1.7217 1.47003 1.44065C1.76981 1.1596 2.17604 1.00119 2.6 1V1Z"
        stroke="#FAFAFA"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 2.49951L9 7.74951L1 2.49951"
        stroke="#FAFAFA"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
