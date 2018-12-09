import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { dynamicImport } from './services/dynamic-import';
import AppShell from './components/organisms/app-shell';
import Loading from './components/molecules/loading';

const Routes = () => (
  <Router>
    <AppShell>
      <Route
        exact
        path="/"
        component={dynamicImport(() => import('./modules/search-page'), { loading: <Loading /> })}
      />
      <Route
        path="/user/:username"
        component={dynamicImport(() => import('./modules/user-page'), { loading: <Loading /> })}
      />
      <Route
        path="/repo/:repoId"
        component={dynamicImport(() => import('./modules/repo-page'), { loading: <Loading /> })}
      />
    </AppShell>
  </Router>
);

export default Routes;
