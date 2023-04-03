import React, { useState } from 'react';
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Overlay, ModalWindow } from "./Modal.styled";
import CloseIcon from '@mui/icons-material/Close';
import Logo from 'components/Logo/Logo';
import { WraperHeaderModal } from 'components/Header/Header.styled';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';


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
      <ModalWindow>
    <WraperHeaderModal>
    <Logo/>
    <CloseIcon sx={{ fontSize: 32, color:'#22252A' }}/>
    </WraperHeaderModal>
        {children}
    </ModalWindow>
    </Overlay>,
    modalRoot);
}

export default Modal;
