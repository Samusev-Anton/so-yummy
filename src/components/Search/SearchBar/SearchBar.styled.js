import styled from "styled-components";
import { device } from '../../GlobalStyles';

export const SearchBarWrap = styled.div`
    width: 295px;
    position: relative;
    align-item: center;
    justify-content: center;
    flex-wrap: nowrap;
    display: block;
    margin: 0 auto;
    @media ${device.tablet}  {
        width: 362px;
    }
    @media ${device.desktop} {
        width: 510px;
    }
`;