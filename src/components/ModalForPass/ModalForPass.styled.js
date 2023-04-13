import styled from 'styled-components';
import { theme } from '../../utils/theme';
export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 100ms;
  overflow-y: scroll;

  &.open {
    height: 100vh;
    width: 100vw;
    opacity: 1;
    z-index: 5;
  }

  &.close {
    opacity: 0;
    z-index: 0;
  }
`;

export const ModalContent = styled.div`
  width: 300px;
  margin: auto;
  background: #fafafa;
  margin-top: 5%;
  padding: 25px 35px;
  border-radius: 10px;
  overflow-y: scroll;
  transform: scale(0.5);
  transition: ${theme.transitions.main};

  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1280px) {
    width: 450px;
  }

  &.open {
    transform: scale(1);
    background: #ffffff;
    transition: 0.4s all;
  }

  &.close {
    transform: scale(0.5);
    background: aliceblue;
  }

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const ModalChild = styled.div`
  opacity: 1;
`;
