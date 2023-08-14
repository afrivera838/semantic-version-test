/* eslint-disable react/prop-types */
import React from 'react';
import { routes } from './Routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Suspense } from 'react';

export const AuthRoutes = () => (
  <Suspense fallback={<h2 style={{color: '#094e9b'}}>...Loading</h2>}>
    <Switch>
      {routes.map((routeItem, index) => (
        <Route {...routeItem} key={`${index}_${routeItem.name}`} />
      ))}
    </Switch>
  </Suspense>
);
