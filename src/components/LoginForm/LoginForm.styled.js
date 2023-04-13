import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import { theme } from '../../theme';

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-bottom: 40px;

  color: #fafafa;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 50px;
  }
`;

export const LinkTo = styled(Link)`
  display: block;
  color: #fafafa;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;

  margin-bottom: 20px;

  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    color: #8baa36;
  }
`;

export const ButtonForPass = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0px 0px 25px 0px;
  background-color: transparent;
  color: #fafafa;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  border: none;
  cursor: pointer;
  font-family: 'Poppins';

  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    color: #8baa36;
  }
`;
