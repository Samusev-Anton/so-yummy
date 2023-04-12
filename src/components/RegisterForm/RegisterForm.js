import { useDispatch } from 'react-redux';

import { Formik } from 'formik';

import { schemaRegValidation } from 'utils/formValidation';
import { getValidColor } from 'utils/getValidColor';
import { register } from '../../redux/auth/auth-operations';

import {
  FormAuth,
  TitleForm,
  BoxForForm,
  BoxForField,
  FormField,
  Button,
  Warning,
  LinkTo,
  BoxForIcon,
  EmailIcon,
  NameIcon,
  PassIcon,
} from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, actions) => {
    const authData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    await dispatch(register(authData));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaRegValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <FormAuth>
            <TitleForm>Registration</TitleForm>
            <BoxForForm>
              <BoxForField>
                <BoxForIcon>
                  <NameIcon stroke={getValidColor(errors.name, touched.name)} />
                </BoxForIcon>
                <FormField
                  type="text"
                  name="name"
                  placeholder="Name"
                  color={getValidColor(errors.name, touched.name)}
                />
                {errors.name && touched.name ? (
                  <Warning color={getValidColor(errors.name, touched.name)}>
                    {errors.name}
                  </Warning>
                ) : null}
              </BoxForField>
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
              {isSubmitting ? 'Signing up...' : 'Sign up'}
            </Button>
          </FormAuth>
        )}
      </Formik>
      <LinkTo to="/signin">Sign in</LinkTo>
    </div>
  );
};
