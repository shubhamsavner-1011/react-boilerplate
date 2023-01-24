import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRouting';
import { privateRoutes, publicRoutes } from './RouteType';

const Routing = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        {publicRoutes?.map((route, index) => {
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
    </Suspense>
  );
};

export default Routing;
