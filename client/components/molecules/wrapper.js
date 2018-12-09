import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';

const renderChildren = children =>
  Array.isArray(children) ? (
    children.map((child, i) => {
      return <FlexItem key={i}>{child}</FlexItem>;
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
  padding: 1rem;
`;

export default Wrapper;
