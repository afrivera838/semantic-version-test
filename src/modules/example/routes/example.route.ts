import { lazy } from 'react';

const Example = lazy(() => import('../Example'));
export default [
  {
    exact: true,
    path: '/example',
    name: 'Boilerplate example',
    component: Example,
  },
];
