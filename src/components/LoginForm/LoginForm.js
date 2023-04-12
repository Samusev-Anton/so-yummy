import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { schemaLoginValidation } from 'utils/formValidation';
import { login } from 'redux/auth/auth-operations';

import { getValidColor } from 'utils/getValidColor';
import {
  FormAuth,
  BoxForForm,
  FormField,
  BoxForField,
  Warning,
  Button,
  LinkTo,
  BoxForIcon,
  EmailIcon,
  PassIcon,
} from '../RegisterForm/RegisterForm.styled';
import { Title } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};
export const LoginForm = () => {
  const dispatch = useDispatch();
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
    </div>
  );
};
