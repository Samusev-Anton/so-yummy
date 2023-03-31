import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Overlay, ModalWindow } from "./Modal.styled";

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, onClose }) => {

  useEffect(() => {

    document.addEventListener('keydown', closeModal);
    document.body.style.overflow = "hidden";
        return () => {
          document.removeEventListener('keydown', closeModal);
          document.body.style.overflow = ""; 
        }
   
  })

  const closeModal = ({ target, currentTarget, code }) => {
    if (target !== currentTarget || code === "Escape") {
      onClose();
    }
  }

  return createPortal(
    <Overlay onClick={closeModal} >
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot);
}

export default Modal;
