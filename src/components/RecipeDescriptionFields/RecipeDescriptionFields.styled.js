import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

export const SectionInput = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  @media ${device.mobileOnly} {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #000000;

    // height: 40px;
    width: 100%;
    // padding: 10px 16px;
    // margin-bottom: 18px;
    padding-bottom: 18px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const SectionSelectInput = styled.input`
  border: 0;
  outline: 0;

  @media ${device.mobileOnly} {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #000000;

    // height: 40px;
    width: 100%;
    // padding: 10px 16px;
    // margin-bottom: 18px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const SectionSelect = styled.select`
  //   display: flex;
  border: 0;
  outline: 0;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  width: 100%;
  @media ${device.mobileOnly} {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
    padding-bottom: 18px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
