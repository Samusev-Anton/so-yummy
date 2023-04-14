import * as React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { LogoutButtonStyled, CancelButtonStyled, ButtonsContainerStyled, LogoutModalText, LogoutModalContainerStyled } from './AlertLogout.styled';

export default function AlertDialog({ onClose }) {

    const dispatch = useDispatch();
    const handelLogoutUser = () => {
        dispatch(logout());
    };
    return (
        <LogoutModalContainerStyled>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <LogoutModalText>
                Are you sure you want to log out?
            </LogoutModalText>
            <ButtonsContainerStyled>
                <LogoutButtonStyled onClick={handelLogoutUser}>
                    Log out
                </LogoutButtonStyled>
                <CancelButtonStyled onClick={onClose}>Cancel</CancelButtonStyled>
            </ButtonsContainerStyled>
        </LogoutModalContainerStyled>
    );
}
