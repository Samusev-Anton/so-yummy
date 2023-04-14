import styled from "styled-components";
import { device } from 'components/GlobalStyles';

export const  SearchSelectorWrap = styled.div`
    margin: 0 auto;
    text-align: center;
    gap: 0.93rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    @media ${device.tablet} {
        gap: 1.125rem;
        margin-top: 1.75rem;
    }
    @media ${device.desktop} {
        margin-top: 1.82rem;
    }
`;

export const SearchSelectorLabel = styled.label`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: -0.24px;
    color: ${p => p.theme.colors.searchSelectText};
        @media ${device.tablet} {
    font-weight: 500;
    font-size: 14px;
    }
    @media ${device.desktop} {
    font-size: 18px;
    }
`;
