import { selectToken } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const tokenExist = useSelector(selectToken);
  return tokenExist ? <Component /> : <Navigate to={redirectTo} />;
};
