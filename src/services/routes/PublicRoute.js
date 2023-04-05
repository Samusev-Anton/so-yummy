import { selectToken } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,

  redirectTo = '/main',
}) => {
  const token = useSelector(selectToken);
  return token ? <Navigate to={redirectTo} /> : <Component />;
};
