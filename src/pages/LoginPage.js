import { LoginForm } from '../components/LoginForm/LoginForm';
import picture from '../images/Order food-pana1.svg';

export const LoginPage = () => {
  return (
    <div>
      <img src={picture} alt="Welcome" />
      <LoginForm />
    </div>
  );
};
