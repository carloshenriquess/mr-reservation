import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import Tables from './views/Tables';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Tables} path="/tables" />
    </BrowserRouter>
  );
};

export default Routes;