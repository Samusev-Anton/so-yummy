import styled from 'styled-components';

export const PaginationWrapper = styled.div`
display: flex; 
justify-content: center;
margin-bottom: 150px;
    @media (min-width: 768px) {
        position: absolute; 
        left:50%;
        transform:translate(-50%, -275%);
    }
    @media (min-width: 1280px) {
        position: absolute; 
        left:50%;
        transform:translate(-50%, -275%);
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-width: 275px;
    padding-top: 12px;
    padding: 12px 20px;
    ${'' /* background-color: #FAFAFA; */}
    background-color: transparent;
    border-radius: 26px;
    box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
    @media (min-width: 768px) {
        min-width: 324px;
        padding: 14px 20px;
    }
`;

export const PageButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 27px;
    width: 27px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;

    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #656565;
    margin: 0 9px;
    @media (min-width: 768px) {
        margin: 0 12px;
    }
    
    &:disabled {
    cursor: not-allowed;
    opacity: 0;
}
    &:hover:not(:disabled) {
    background-color: #EBF3D4;
    color: #22252A;
}
    &.active {
    color: white;
    background-color: #EBF3D4;
    color: #22252A;
}
    &:first-child {
        margin-right: 24px;
        @media (min-width: 768px) {
            margin-right: 40px;
        }
}
    &:last-child {
        margin-right: 24px;
        @media (min-width: 768px) {
        margin-right: 40px;
    }
} 
`;

export const ArrowButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    color: rgba(169, 169, 169, 0.73);
    height: 15px; 
    width: 8px;
    opacity: 0.73;
    &:disabled {
        opacity: 0;
        cursor: default;
    }
`;
