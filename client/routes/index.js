import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { dynamicImport } from '../components/utils/dynamic-import';

const Routes = () => (
  <Router>
    <Fragment>
      <Route path="/" component={dynamicImport(() => import('../components/pages/home'))} />
      <Route path="/2" component={dynamicImport(() => import('../components/pages/home2'))} />
    </Fragment>
  </Router>
);

export default Routes;
