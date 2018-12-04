import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';

const Wrapper = ({ children = [] }) => {
  if (Array.isArray(children)) {
    return (
      <WrapperUI direction="column">
        {children.map(child => {
          return <FlexItem key={child.props.path}>{child}</FlexItem>;
        })}
      </WrapperUI>
    );
  }
  return (
    <WrapperUI direction="column">
      <FlexItem>{children}</FlexItem>
    </WrapperUI>
  );
};

const WrapperUI = styled(FlexContainer)`
  padding: 0 2rem;
  width: 100%;
`;

export default Wrapper;
