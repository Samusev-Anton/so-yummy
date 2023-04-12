import * as yup from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Для пароля:  регулярний вираз перевіряє, щоб пароль містив  як мінімум 1 цифру, 1 малу літеру, 1 велику літеру та 1 спеціальний символ. Пароль повинен містити не менше 8 символів.\

// const passwordRegex =
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

export const schemaRegValidation = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email address, try again')
    .required('This field is required'),
  password: yup
    .string()
    // .min(8, 'Your password is short')
    // .max(16, 'Your password is to long')
    // .matches(
    //   passwordRegex,
    //   'The password must contain at least 8 characters, include letters, numbers and special characters.'
    // )
    .required('This field is required'),
});

export const schemaLoginValidation = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email address, try again')
    .required('This field is required'),
  password: yup
    .string()
    // .min(8, 'Your password is short')
    // .max(16, 'Your password is to long')
    // .matches(
    //   passwordRegex,
    //   'The password must contain at least 8 characters, include letters, numbers and special characters.'
    // )
    .required('This field is required'),
});

export const schemaChangePassValidation = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email address, try again')
    .required('This field is required'),
});
