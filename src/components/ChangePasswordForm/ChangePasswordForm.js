import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changePassword, SendMailPassword } from 'redux/auth/auth-operations';
import { tempPassword } from 'redux/auth/selectors';

import {
  Text,
  FormAuth,
  TitleForm,
  BoxForField,
  FormField,
  Button,
  BoxForForms,
  VisibilityBtn,
  Label,
} from './ChangePassFrom.styled';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockResetIcon from '@mui/icons-material/LockReset';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const ChangePasswordForm = ({ isCloseModal }) => {
  const dispatch = useDispatch();

  const [passwordShown, setPasswordShown] = useState(false);
  const [temporaryPassword, setTempPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [doublePassword, setDoublePassword] = useState('');
  const [email, setEmail] = useState('');

  const temp = useSelector(tempPassword);
  const activateChangePassword = temp === temporaryPassword;
  const activeSubmitPassword = newPassword === doublePassword;

  const handleSubmitSendEmail = async e => {
    e.preventDefault();
    e.stopPropagation();

    const email = e.currentTarget.elements.email.value;
    setEmail(email);
    dispatch(SendMailPassword(email));
  };

  const onSubmitForm = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const newPassword = {
      email,
      password: doublePassword,
    };

    dispatch(changePassword(newPassword));
    form.reset();
  };

  return (
    <>
      <TitleForm>Forgot your password?</TitleForm>
      <Text>
        Don't worry about it! Please enter below the email address you signed up
        with and we'll send you a temporary password.
      </Text>

      <BoxForForms>
        <FormAuth onSubmit={handleSubmitSendEmail} autoComplete="on">
          <BoxForField>
            <MailOutlineIcon
              sx={{
                color: '#8baa36',
                position: 'absolute',
                top: '16px',
                left: '14px',
              }}
            />
            <FormField type="email" name="email" placeholder="Email" />
          </BoxForField>
          {email === '' ? (
            <Button type="submit">Send Email</Button>
          ) : (
            <Text></Text>
          )}
        </FormAuth>

        <FormAuth onSubmit={onSubmitForm}>
          <Label htmlFor="TempPass">Temporary Password</Label>
          <BoxForField>
            <LockResetIcon
              sx={{
                color: '#8baa36',
                position: 'absolute',
                top: '16px',
                left: '14px',
              }}
            />
            <FormField
              id="TempPass"
              onChange={e => setTempPassword(e.currentTarget.value)}
              type="text"
              name="temporaryPassword"
              title="Insert the password received by email"
              placeholder="Temporary Password"
              required
            />
          </BoxForField>
          {activateChangePassword && temp && (
            <>
              <Label htmlFor="newPass">Enter new password</Label>
              <BoxForField>
                <FormField
                  id="newPass"
                  onChange={e => setNewPassword(e.currentTarget.value)}
                  type={passwordShown ? 'text' : 'password'}
                  name="newPassword"
                  title="enter the new password"
                  placeholder="New password"
                />
                <VpnKeyIcon
                  sx={{
                    color: '#8baa36',
                    position: 'absolute',
                    top: '16px',
                    left: '14px',
                  }}
                />
                <VisibilityBtn
                  type="button"
                  onClick={() => setPasswordShown(!passwordShown)}
                >
                  {passwordShown ? (
                    <VisibilityOffIcon
                      sx={{
                        color: '#8baa36',
                      }}
                    />
                  ) : (
                    <VisibilityIcon
                      sx={{
                        color: '#8baa36',
                      }}
                    />
                  )}
                </VisibilityBtn>
              </BoxForField>
              <Label htmlFor="repeatPassword">Repeat new password</Label>
              <BoxForField>
                <FormField
                  id="repeatPassword"
                  onChange={e => setDoublePassword(e.currentTarget.value)}
                  type={passwordShown ? 'text' : 'password'}
                  name="doublePassword"
                  title="Repeat password"
                  placeholder="Repeat password"
                />
                <VpnKeyIcon
                  sx={{
                    color: '#8baa36',
                    position: 'absolute',
                    top: '16px',
                    left: '14px',
                  }}
                />
                <VisibilityBtn
                  type="button"
                  onClick={() => setPasswordShown(!passwordShown)}
                >
                  {passwordShown ? (
                    <VisibilityOffIcon
                      sx={{
                        color: '#8baa36',
                      }}
                    />
                  ) : (
                    <VisibilityIcon
                      sx={{
                        color: '#8baa36',
                      }}
                    />
                  )}
                </VisibilityBtn>
              </BoxForField>
              {activeSubmitPassword && newPassword && (
                <Button type="submit" onClick={isCloseModal}>
                  Change password
                </Button>
              )}
            </>
          )}
        </FormAuth>
      </BoxForForms>
    </>
  );
};
