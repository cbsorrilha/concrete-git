import React from 'react';
import Card from '../atoms/card';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';

const CenteredCard = props => (
  <FlexContainer height="100vh" direction="column" justify="center">
    <FlexItem>
      <FlexContainer justify="center">
        <FlexItem>
          <Card {...props} />
        </FlexItem>
      </FlexContainer>
    </FlexItem>
  </FlexContainer>
);

export default CenteredCard;
