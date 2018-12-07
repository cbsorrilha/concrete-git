import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../helpers';

const Flex = ({ ...props }) => <div {...props} />;

const flexStyles = ({
  width = '100%',
  height = '100%',
  direction = null,
  wrap = null,
  flow = null,
  justify = null,
  alignItems = null,
  alignContent = null,
}) => css`
  ${!width ? '' : `width: ${width}`};
  ${!height ? '' : `height: ${height}`};
  ${!direction ? '' : `flex-direction: ${direction}`};
  ${!wrap ? '' : `flex-wrap: ${wrap}`};
  ${!flow ? '' : `flex-flow: ${flow}`};
  ${!justify ? '' : `justify-content: ${justify}`};
  ${!alignItems ? '' : `align-items: ${alignItems}`};
  ${!alignContent ? '' : `align-content: ${alignContent}`};
`;

const FlexUI = styled(Flex)`
  display: ${({ inline }) => (!inline ? `` : 'inline-')}flex;
  ${flexStyles};
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) => flexStyles(tablet)};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) => flexStyles(desktop)};
  }
`;

export default FlexUI;

FlexUI.propTypes = {
  inline: PropTypes.bool,
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  desktop: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  flow: PropTypes.string,
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
};
