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

export const SectionRecipePreparationFields = styled.div`
  width: 100%;
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  @media ${device.mobileOnly} {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #3e4462;
    margin-bottom: 24px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const SectionTextArea = styled.input`
  border: 0;
  background-color: rgba(217, 217, 217, 0.3);
  border-radius: 6px;
  @media ${device.mobileOnly} {
    display: block;
    height: 154px;
    // width: 200px;
    padding: 10px 16px;
    margin-bottom: 18px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

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
