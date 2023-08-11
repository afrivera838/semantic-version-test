import { lazy } from 'react';

const Example = lazy(() => import('../modules/example/Example'));
import exampleRoutes from './../modules/example/routes/example.route';
export const routes = [
  ...exampleRoutes,

  {
    path: '*',
    name: 'Boilerplate example',
    component: Example,
  },
];
