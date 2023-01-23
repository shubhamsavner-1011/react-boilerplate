import { Navigate } from 'react-router-dom';

interface IProps {
  Component: any;
}
export const PrivateRoute = ({ Component }: IProps) => {
  return localStorage.getItem('token') ? (
    <Component />
  ) : (
    <Navigate to="/dashboard" />
  );
};
