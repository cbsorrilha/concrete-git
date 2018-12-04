import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import Link from '../atoms/link';

const NavigationLinks = props => (
  <NavigationLinksWrapper width="10rem" justify="space-around">
    <FlexItem>
      <Link variant="light" to="/app">
        Principal
      </Link>
    </FlexItem>
    <FlexItem>
      <Link variant="light" to="/app/clientes">
        Clientes
      </Link>
    </FlexItem>
  </NavigationLinksWrapper>
);

const NavigationLinksWrapper = styled(FlexContainer)`
  margin-left: 2rem;
`;

export default NavigationLinks;
