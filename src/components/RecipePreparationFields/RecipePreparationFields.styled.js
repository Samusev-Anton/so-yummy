import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

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
