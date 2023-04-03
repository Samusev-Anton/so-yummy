import * as React from 'react';
// import { useDispatch } from 'react-redux';
import {
  Form,
  EmailField,
  TextField,
  SubscribeButton,
  IconLetter,
  IconLetterStyle,
  SubscribeTitle,
  SubscribeText,
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
      <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
      <SubscribeText>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
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
        />
      </EmailField>
      <SubscribeButton type="submit">Subscribe</SubscribeButton>
    </Form>
  );
};
