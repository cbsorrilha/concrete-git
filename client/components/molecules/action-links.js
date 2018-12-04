import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';

const renderChild = child => <ActionLink key={child.props.children}>{child}</ActionLink>;
const ActionLinks = ({ children, justify = 'flex-end', alignItems = 'center', ...props }) => {
  return (
    <FlexContainer alignItems={alignItems} justify={justify} {...props}>
      {Array.isArray(children) ? children.map(renderChild) : renderChild(children)}
    </FlexContainer>
  );
};

const ActionLink = styled(FlexItem)`
  margin-right: 0.5rem;
`;

export default ActionLinks;
