import styled from 'styled-components';

export const RowTable = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 100px;
    margin-top: 32px;
    padding-left: 0;
    gap: 28px;

    @media (min-width: 768px) {
        gap: 32px;
        margin-bottom: 200px;
        margin-top: 50px;
    }

    @media (min-width: 1440px) {
        gap: 14px;
        row-gap: 100px;
    }
`;
