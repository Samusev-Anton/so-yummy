import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

export const Form = styled.form`
  margin: 0 auto;
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media ${device.mobileOnly} {
    width: 204px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 38px;
    gap: 12px;
    // width: 442px;
    height: 50px;
    justify-content: center;
  }
  @media ${device.desktop} {
    flex-direction: column;
    margin: 0;
    margin-left: 150px;
    // margin-bottom: 0px;
    height: auto;
  }
`;

export const EmailField = styled.div`
  display: flex;
  padding: 11px 14px;
  align-items: center;
  //   justify-content: space-between;
  border: none;
  border: 1px solid rgba(250, 250, 250, 0.16);
  border-radius: 6px;
  outline-style: none;
  outline: none;
  @media ${device.tablet} {
    width: 227px;
    padding: 15px 15px;
  }
  @media ${device.desktop} {
    width: 306px;
    // height: 60px;
    padding: 17.5px 15.5px;
  }
`;

export const TextField = styled.input`
  background-color: transparent;
  color: #fafafa;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  border: none;
  margin-left: 12px;
  width: 100%;
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
  // font-family: 'Poppins';
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
  @media ${device.mobileOnly} {
    height: 16px;
  }
  @media ${device.mobile} {
    height: 16px;
  }
  @media ${device.tablet} {
    height: 16px;
  }
  @media ${device.desktop} {
    height: 16px;
  }
`;

export const IconLetter = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.6 1H15.4C15.824 1.00119 16.2302 1.1596 16.53 1.44065C16.8298 1.7217 16.9987 2.10254 17 2.5V11.5C16.9987 11.8975 16.8298 12.2783 16.53 12.5593C16.2302 12.8404 15.824 12.9988 15.4 13H2.6C2.17604 12.9988 1.76981 12.8404 1.47003 12.5593C1.17024 12.2783 1.00127 11.8975 1 11.5V2.5C1.00127 2.10254 1.17024 1.7217 1.47003 1.44065C1.76981 1.1596 2.17604 1.00119 2.6 1V1Z"
        stroke="#FAFAFA"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 2.49951L9 7.74951L1 2.49951"
        stroke="#FAFAFA"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
