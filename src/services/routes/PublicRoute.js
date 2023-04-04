import { selectUserLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,

  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(selectUserLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
