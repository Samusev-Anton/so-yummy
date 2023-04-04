import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import { schemaLoginValidation } from 'utils/formValidation';
import { login } from 'redux/auth/auth-operations';

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
      <h1>Sign In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaLoginValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            Password
            <Field type="password" name="password" placeholder="Password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Sign In</button>
          </Form>
        )}
      </Formik>
      <Link to="/register">Registration</Link>
    </div>
  );
};
