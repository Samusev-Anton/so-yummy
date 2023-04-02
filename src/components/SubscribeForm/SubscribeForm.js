import * as React from 'react';
// import { useDispatch } from 'react-redux';
import {
  Form,
  EmailField,
  TextField,
  SubscribeButton,
  IconLetter,
  IconLetterStyle,
} from './SubscribeForm.styled';
// import { logIn } from '../../Redux/auth/operations';

export const SubscribeForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    // const form = event.currentTarget;
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //   })
    // );
    // form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
        />
      </EmailField>
      <SubscribeButton type="submit">Subscribe</SubscribeButton>
    </Form>
  );
};
