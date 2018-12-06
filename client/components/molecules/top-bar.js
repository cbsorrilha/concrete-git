import React from 'react';
import styled from 'styled-components';
import GridContainer from '../atoms/grid-container';
import GridItem from '../atoms/grid-container';

export default function TopBar({ children }) {
  return (
    <TopContainer height="25%">
      <GridItem>{children}</GridItem>
    </TopContainer>
  );
}

const TopContainer = styled(GridContainer)`
  background-color: #003366;
  padding: 1rem;
`;
