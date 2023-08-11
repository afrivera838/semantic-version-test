import React from 'react';
import stl from './styles/index.module.scss';

const Example = () => (
  <div>
    <Box></Box>
    <h1 className={`${stl.colorBlue} ${stl.smallText}`}>Hello Boilerplate!</h1>
  </div>
);

export default Example
