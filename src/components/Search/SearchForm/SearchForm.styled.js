import styled from "styled-components";
import { device } from 'components/GlobalStyles';

export const SearchPageBtn = styled.button`
    &:hover {
        border: 2px solid #8BAA36;
        background-color:  #fafafa;
        color: #8baa36;
    }
    color: #fafafa;
    border: none;
    font-family: 'Poppins';
    background-color: #8baa36;
    border-radius: 24px 44px;
    position: absolute;
    right: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    height: 53px;
    width: 113px;
        @media ${device.tablet} {
            height: 57px;
            width: 161px;
        }
        @media ${device.tablet} {
            height: 70px;
    }
`;

