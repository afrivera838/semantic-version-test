import React from 'react';
import { StackRouter } from './router/StackRouter/StackRouter';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <StackRouter />
  </BrowserRouter>
);

export default App;
