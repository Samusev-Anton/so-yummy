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
    dispatch(
      sendMailOperation({
        email: form.elements.email.value,
      })
    );
    form.reset();
  };

  return (
    <Formik validationSchema={SubscribeSchema}>
      {({ errors, touched }) => (
        <FormSubscribe autoComplete="off" onSubmit={handleSubmit}>
          <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
          <SubscribeText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </SubscribeText>
          <EmailField
            style={{
              outline:
                errors.email && touched.email && email !== ''
                  ? '1px solid #E74A3B'
                  : '1px solid rgba(250, 250, 250, 0.16)',
            }}
          >
            <IconLetterStyle>
              <IconLetter
                errors={errors.email}
                touched={touched.email}
                email={email}
              />
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
                  d="M0 10C0 4.47656 4.47656 0 10 0C15.5234 0 20 4.47656 20 10C20 15.5234 15.5234 20 10 20C4.47656 20 0 15.5234 0 10ZM6.83594 8.12891L8.67578 9.96484L6.83594 11.8359C6.47266 12.2031 6.47266 12.7969 6.83594 13.1289C7.20312 13.5273 7.79688 13.5273 8.12891 13.1289L9.96484 11.3242L11.8359 13.1289C12.2031 13.5273 12.7969 13.5273 13.1289 13.1289C13.5273 12.7969 13.5273 12.2031 13.1289 11.8359L11.3242 9.96484L13.1289 8.12891C13.5273 7.79688 13.5273 7.20312 13.1289 6.83594C12.7969 6.47266 12.2031 6.47266 11.8359 6.83594L9.96484 8.67578L8.12891 6.83594C7.79688 6.47266 7.20312 6.47266 6.83594 6.83594C6.47266 7.20312 6.47266 7.79688 6.83594 8.12891Z"
                  fill="#E74A3B"
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
