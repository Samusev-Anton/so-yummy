
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import CloseIcon from '@mui/icons-material/Close';
import Logo from 'components/Logo/Logo';
import { WraperHeaderModal } from 'components/Header/Header.styled';
import { Container } from 'components/GlobalStyles';


const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeModal);
      document.body.style.overflow = '';
    };
  });

  const closeModal = ({ target, currentTarget, code }) => {
    if (target !== currentTarget || code === 'Escape') {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalWindow>
        <Container>
          <WraperHeaderModal>
            <Logo />
            <CloseIcon sx={{ fontSize: 32, color: '#22252A' }} />
          </WraperHeaderModal>
        </Container>
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
