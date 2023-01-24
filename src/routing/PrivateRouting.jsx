/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ Component }) => {
  return localStorage.getItem('token') ? <Component /> : <Navigate to="/" />;
};
