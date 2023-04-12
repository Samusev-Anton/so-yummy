import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { schemaLoginValidation } from 'utils/formValidation';
import { login } from 'redux/auth/auth-operations';

import { getValidColor } from 'utils/getValidColor';
import { ModalForPass } from '../ModalForPass/ModalForPass';
import { ChangePasswordForm } from '../ChangePasswordForm/ChangePasswordForm';
import {
  FormAuth,
  BoxForForm,
  FormField,
  BoxForField,
  Warning,
  Button,
  BoxForIcon,
  EmailIcon,
  PassIcon,
} from '../RegisterForm/RegisterForm.styled';
import { Title, ButtonForPass, LinkTo } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = async (values, actions) => {
    await dispatch(
      login({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    ).then(res => {
      if (res.payload.name === 'AxiosError') {
        actions.setSubmitting(false);
      } else {
        actions.resetForm();
      }
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaLoginValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <FormAuth>
            <Title>Sign In</Title>

            <BoxForForm>
              <BoxForField>
                <BoxForIcon>
                  <EmailIcon
                    stroke={getValidColor(errors.email, touched.email)}
                  />
                </BoxForIcon>
                <FormField
                  type="email"
                  name="email"
                  placeholder="Email"
                  color={getValidColor(errors.email, touched.email)}
                />
                {errors.email && touched.email ? (
                  <Warning color={getValidColor(errors.email, touched.email)}>
                    {errors.email}
                  </Warning>
                ) : null}
              </BoxForField>
              <BoxForField>
                <BoxForIcon>
                  <PassIcon
                    stroke={getValidColor(errors.password, touched.password)}
                  />
                </BoxForIcon>
                <FormField
                  type="password"
                  name="password"
                  placeholder="Password"
                  color={getValidColor(errors.password, touched.password)}
                />
                {errors.password && touched.password ? (
                  <Warning
                    color={getValidColor(errors.password, touched.password)}
                  >
                    {errors.password}
                  </Warning>
                ) : null}
              </BoxForField>
            </BoxForForm>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </FormAuth>
        )}
      </Formik>
      <LinkTo to="/register">Registration</LinkTo>
      <ButtonForPass
        type="button"
        onClick={() => setModal(true)}
        disabled={modal}
      >
        Forgot password?
      </ButtonForPass>
      <ModalForPass isOpened={modal} isCloseModal={closeModal}>
        <ChangePasswordForm isCloseModal={closeModal} />
      </ModalForPass>
    </div>
  );
};
