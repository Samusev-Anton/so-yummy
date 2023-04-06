import styled from "styled-components";
export const SearchPageBtn = styled.button`
    &:hover {
        background-color: #22252a;
        color: #fafafa;
    }
    color: background: rgba(139, 170, 54, 1);
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
        @media (min-width: 768px) {
            height: 57px;
            width: 161px;
        }
        @media (min-width: 1280px) {
            height: 70px;
    }
`;