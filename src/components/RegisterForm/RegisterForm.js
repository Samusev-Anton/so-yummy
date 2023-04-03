import { useDispatch } from 'react-redux';
// import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { schemaRegValidation } from 'utils/formValidation';
import { register } from '../../redux/auth/auth-operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const authData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(authData));
    actions.resetForm();
  };
  return (
    <div>
      <div>
        <h1>Registration</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schemaRegValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field type="text" name="name" placeholder="Name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field type="email" name="email" placeholder="Email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              Password
              <Field type="password" name="password" placeholder="Password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button type="submit">Sign up</button>
            </Form>
          )}
        </Formik>
        <Link to="/signin">Sign in</Link>
      </div>
    </div>
  );
};
