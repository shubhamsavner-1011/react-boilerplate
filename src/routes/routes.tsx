import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './Privaterouting';
import { privateRoutes, publicRoutes } from './routextype';

interface IRoute {
  path: string;
  Component: React.FC<any>;
}

const Routing = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        <Routes>
          {publicRoutes?.map((route: IRoute, index) => {
            return (
              <Route
                path={route.path}
                key={index}
                element={<route.Component />}
              />
            );
          })}
          {privateRoutes?.map((route, index) => {
            return (
              <Route
                path={route.path}
                key={index}
                element={<PrivateRoute Component={route.Component} />}
              />
            );
          })}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Routing;
