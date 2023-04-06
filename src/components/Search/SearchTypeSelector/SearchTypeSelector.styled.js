import styled from "styled-components";

export const SearchSelectorWrap = styled.div`
    font-family: Poppins;
    justify-content: center;
    display: flex;
    height: 34px;
    width: 223px;
    left: 76px;
    top: 269px;
    ${'' /* position: absolute; */}
    height: 34px;
    @media (min-width: 768px) {
    height: 41px;
    width: 265px;
    left: 252px;
    top: 293px;
    height: 41px;
    }
    @media (min-width: 1440px) {
    height: 47px;
    width: 310px;
    left: 565px;
    top: 357px;
    height: 47px;
    }
`;

export const SearchSelectorLabel = styled.label`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.23999999463558197px;
    text-align: left;
    @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;}
    @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
    }
`;

export const SearchSelectorSelect = styled.select`

    @media (min-width: 768px) {

    @media (min-width: 1440px) 
    }
    
`;

export const SearchSelectorOption = styled.option`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
    @media (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    @media (min-width: 1440px) {
    font-size: 14px;
    }
`;


