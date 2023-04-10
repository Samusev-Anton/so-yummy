import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMailOperation } from 'redux/opertions';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormSubscribe,
  EmailField,
  TextField,
  SubscribeButton,
  IconLetter,
  IconLetterStyle,
  SubscribeTitle,
  SubscribeText,
  WarningMessage,
  WarningSvg,
} from './SubscribeForm.styled';

const SubscribeSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Invalid email'),
});

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    // console.log(form.elements.email.value);
    dispatch(
      sendMailOperation({
        email: form.elements.email.value,
      })
    );
    form.reset();
  };

  return (
    <Formik
      // initialValues={{
      //   email: '',
      // }}
      validationSchema={SubscribeSchema}
    >
      {({ errors, touched }) => (
        <FormSubscribe autoComplete="off" onSubmit={handleSubmit}>
          <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
          <SubscribeText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </SubscribeText>
          <EmailField>
            <IconLetterStyle>
              <IconLetter />
            </IconLetterStyle>
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {errors.email && touched.email && email !== '' ? (
              <WarningSvg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.47656 0 0 4.47656 0 10C0 15.5234 4.47656 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0ZM9.0625 5.9375C9.0625 5.42188 9.48438 5 10 5C10.5156 5 10.9375 5.41992 10.9375 5.9375V10.9375C10.9375 11.4551 10.5176 11.875 10 11.875C9.48242 11.875 9.0625 11.457 9.0625 10.9375V5.9375ZM10 15.625C9.32187 15.625 8.77188 15.075 8.77188 14.3969C8.77188 13.7188 9.32148 13.1687 10 13.1687C10.6785 13.1687 11.2281 13.7188 11.2281 14.3969C11.2266 15.0742 10.6797 15.625 10 15.625Z"
                  fill="#F6C23E"
                />
              </WarningSvg>
            ) : null}
            {errors.email && touched.email && email !== '' ? (
              <WarningMessage>{errors.email}</WarningMessage>
            ) : null}
          </EmailField>

          <SubscribeButton type="submit" disabled={!email}>
            Subscribe
          </SubscribeButton>
        </FormSubscribe>
      )}
    </Formik>
  );
};
