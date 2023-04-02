import styled from 'styled-components';
import { theme } from '../../theme';

export const TooltipWrapper = styled.div`
    display: none;
`;

export const CardTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: #3E4462;
    padding: 16px;
    margin: 16px;
    background-color: #fff;
    position: absolute;
    bottom: 8px;
    border-radius: 8px;
    width: calc(100% - 64px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover + ${TooltipWrapper} {
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        text-align: center;
        max-width: 100%;
        margin-top: -25px;
        border-radius: 5px;
        padding: 4px;
        font-family: ${p => p.theme.fonts.main};
        color: ${p => p.theme.colors.mainHeaderText};
        background-color: #8baa36;

    p {
        width: 100%;
        padding: 5px;
    }

    @media (min-width: 1440px) {
        margin-top: 8px;
    }
}
`;

export const CardImg = styled.img`
    height: 323px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: all 1000ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CardDish = styled.li`
    width: 343px;
    height: 323px;
    border-radius: 8px;
    position: relative;

    @media (min-width: 768px) {
        width: calc((100% - 32px) / 2);
    }

    @media (min-width: 1440px) {
        width: calc((100% - 42px) / 4);
    }

    a {
        display: block;
        overflow: hidden;
        border-radius: 8px;

        :hover img {
        transform: scale(1.25);
        filter: contrast(130%);
        }
    }
`;
