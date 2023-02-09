import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shoulRedirect = !isLoggedIn && !isRefreshing;
  return shoulRedirect ? <Navigate to={redirectTo} /> : Component;
};
