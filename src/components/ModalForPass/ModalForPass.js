import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { ModalContent, ModalWrapper, ModalChild } from './ModalForPass.styled';
const modalRoot = document.querySelector('#modalPass-root');

export const ModalForPass = ({ isOpened, isCloseModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        isCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCloseModal]);

  const handleBackdropPress = e => {
    if (e.target === e.currentTarget) {
      isCloseModal();
    }
  };

  return createPortal(
    <ModalWrapper
      className={isOpened ? 'open' : 'close'}
      onClick={handleBackdropPress}
    >
      <ModalContent className={isOpened ? 'open' : 'close'}>
        <ModalChild>{children}</ModalChild>
      </ModalContent>
    </ModalWrapper>,
    modalRoot
  );
};
