import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { dynamicImport } from './components/utils/dynamic-import';

const Routes = () => (
  <Router>
    <Fragment>
      <Route path="/" component={dynamicImport(() => import('./modules/search-page'))} />
    </Fragment>
  </Router>
);

export default Routes;
