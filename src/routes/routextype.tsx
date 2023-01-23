import { URL } from '../base/constants/routesPath';

import {
  Home,
  Welcome,
  Register,
  SignIn
} from '../pages/index';


export const publicRoutes = [
  { path: URL.HOME_PAGE, Component: Home },
  { path: URL.LOGIN_PAGE, Component: SignIn },
  { path: URL.REGISTER_PAGE, Component: Register },
  { path: URL.WELCOME_PAGE, Component: Welcome },
];

export const privateRoutes = [{ path: URL.HOME_PAGE, Component: Home }];
