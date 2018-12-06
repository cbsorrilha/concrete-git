import React from 'react';
import Navigation from './navigation';
import Wrapper from '../molecules/wrapper';

const AppShell = ({ children }) => (
  <div>
    <Navigation />
    <Wrapper>{children}</Wrapper>
  </div>
);

export default AppShell;
