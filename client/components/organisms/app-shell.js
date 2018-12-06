import React, { Fragment } from 'react';
import Wrapper from '../molecules/wrapper';
import MegaTitle from '../molecules/mega-title';
import TopBar from '../molecules/top-bar';
import GlobalStyles from '../utils/global-styles';

const AppShell = ({ children }) => (
  <Fragment>
    <TopBar>
      <MegaTitle align="center">GITÃO :)</MegaTitle>
    </TopBar>
    <Wrapper>
      <GlobalStyles />
      {children}
    </Wrapper>
  </Fragment>
);

export default AppShell;
