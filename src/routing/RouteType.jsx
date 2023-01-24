import { URL } from '../base/constants/routesPath';

import { Home, Register, SignIn, Blog, About } from '../pages/index';

export const publicRoutes = [
  { path: URL.HOME_PAGE, Component: Home },
  { path: URL.LOGIN_PAGE, Component: SignIn },
  { path: URL.REGISTER_PAGE, Component: Register },
  { path: URL.BLOG_PAGE, Component: Blog },
  { path: URL.ABOUT_PAGE, Component: About },
];

export const privateRoutes = [{ path: URL.HOME_PAGE, Component: Home }];
