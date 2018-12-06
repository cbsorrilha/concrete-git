import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { dynamicImport } from './services/dynamic-import';
import AppShell from './components/organisms/app-shell';

const Routes = () => (
  <Router>
    <AppShell>
      <Route path="/" component={dynamicImport(() => import('./modules/search-page'))} />
    </AppShell>
  </Router>
);

export default Routes;
