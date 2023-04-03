import { RegisterForm } from '../components/RegisterForm/RegisterForm';

import picture from '../images/Order food-pana1.svg';

export const SignUpPage = () => {
  return (
    <div>
      <img src={picture} alt="Register" />

      <RegisterForm />
    </div>
  );
};
