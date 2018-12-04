import React from 'react';
import styled from 'styled-components';

const Flex = ({ alignItems, ...props }) => <div {...props} />;

const FlexUI = styled(Flex)`
  ${({ width = '100%' }) => `width: ${width}`};
  ${({ height = '100%' }) => `height: ${height}`};
  display: ${({ inline }) => (!inline ? `` : 'inline-')}flex;
  ${({ direction = null }) => (!direction ? '' : `flex-direction: ${direction}`)};
  ${({ wrap = null }) => (!wrap ? '' : `flex-wrap: ${wrap}`)};
  ${({ flow = null }) => (!flow ? '' : `flex-flow: ${flow}`)};
  ${({ justify = null }) => (!justify ? '' : `justify-content: ${justify}`)};
  ${({ alignItems = null }) => (!alignItems ? '' : `align-items: ${alignItems}`)};
  ${({ alignContent = null }) => (!alignContent ? '' : `align-content: ${alignContent}`)};
`;

export default FlexUI;
