import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import NavigationLinks from '../molecules/navigation-links';
import NavigationLogo from '../molecules/navigation-logo';
import ExitButton from '../molecules/exit-button';

const Navigation = props => (
  <NavigationWrapper alignItems="center" justify="space-between">
    <FlexItem>
      <FlexContainer alignItems="center">
        <FlexItem>
          <NavigationLogo />
        </FlexItem>
        <FlexItem>
          <NavigationLinks />
        </FlexItem>
      </FlexContainer>
    </FlexItem>
    <FlexItem>
      <ExitButton />
    </FlexItem>
  </NavigationWrapper>
);

const NavigationWrapper = styled(FlexContainer)`
  padding: 0 2rem;
  height: 4rem;
  background-color: #5d7aac;
  box-shadow: 0px 2px 8px 0px rgba(78, 78, 78, 1);
  margin-bottom: 2rem;
`;

export default Navigation;
