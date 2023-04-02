import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
export const WelcomePage = () => {
  return (
    <div
      style={{
        display: 'block',
        margin: '0 auto',
        maxWidth: '1448px',
        paddingTop: '20px',
      }}
    >
      <img src={logo} alt="logo" />
      <h1>Welcome to the app</h1>
      <p>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/register">Registration</Link>
        <Link to="/signin">Sign in</Link>
      </nav>
    </div>
  );
};
