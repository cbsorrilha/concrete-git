import React from 'react';
import styled from 'styled-components';

const Flex = ({ ...props }) => <div {...props} />;

const FlexUI = styled(Flex)`
  ${({ width = 'auto' }) => `width: ${width}`};
  ${({ height = 'auto' }) => `height: ${height}`};
  ${({ order = null }) => (!order ? '' : `order: ${order}`)};
  ${({ grow = null }) => (!grow ? '' : `flex-grow: ${grow}`)};
  ${({ shrink = null }) => (!shrink ? '' : `flex-shrink: ${shrink}`)};
  ${({ basis = null }) => (!basis ? '' : `flex-basis: ${basis}`)};
  ${({ flex = null }) => (!flex ? '' : `flex: ${flex}`)};
  ${({ align = null }) => (!align ? '' : `align-self: ${align}`)};
`;

export default FlexUI;
