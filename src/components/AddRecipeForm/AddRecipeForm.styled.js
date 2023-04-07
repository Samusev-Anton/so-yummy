import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

export const BtnAdd = styled.button`
  &:hover {
    background-color: #8baa36;
    color: rgb(255, 255, 255);
  }
  background-color: #22252a;
  color: #fafafa;
  border: none;
  //   font-family: 'Poppins';
  border-radius: 24px 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobileOnly} {
    height: 46px;
    width: 129px;
  }
  @media ${device.tablet} {
    height: 52px;
    width: 161px;
  }
  @media ${device.desktop} {
    height: 52px;
    width: 161px;
  }
`;
