import React from 'react';
import Logo from '../atoms/logo';
import Link from '../atoms/link';
import Title from '../atoms/title';

const NavigationLogo = props => (
  <Title>
    <Link variant="dark" to="/">
      <Logo />
    </Link>
  </Title>
);

export default NavigationLogo;
