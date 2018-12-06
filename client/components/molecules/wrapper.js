import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';

const renderChildren = children =>
  Array.isArray(children) ? (
    children.map(child => {
      return <FlexItem key={child.props.path}>{child}</FlexItem>;
    })
  ) : (
    <FlexItem>{children}</FlexItem>
  );

const Wrapper = ({ children = [] }) => {
  return <WrapperUI direction="column">{renderChildren(children)}</WrapperUI>;
};

const WrapperUI = styled(FlexContainer)`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 2rem;
`;

export default Wrapper;
