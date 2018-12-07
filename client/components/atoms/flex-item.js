import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../helpers';

const Flex = ({ ...props }) => <div {...props} />;

const flexItemStyles = ({
  width = 'auto',
  height = 'auto',
  order = null,
  grow = null,
  shrink = null,
  basis = null,
  flex = null,
  align = null,
}) => css`
  width: ${width};
  height: ${height};
  ${!order ? '' : `order: ${order}`};
  ${!grow ? '' : `flex-grow: ${grow}`};
  ${!shrink ? '' : `flex-shrink: ${shrink}`};
  ${!basis ? '' : `flex-basis: ${basis}`};
  ${!flex ? '' : `flex: ${flex}`};
  ${!align ? '' : `align-self: ${align}`};
`;

const FlexUI = styled(Flex)`
  ${flexItemStyles}
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) =>
      css`
        ${flexItemStyles(tablet)};
      `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) =>
      css`
        ${flexItemStyles(desktop)};
      `};
  }
`;

export default FlexUI;

FlexUI.propTypes = {
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  desktop: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  order: PropTypes.string,
  grow: PropTypes.string,
  shrink: PropTypes.string,
  basis: PropTypes.string,
  flex: PropTypes.string,
  align: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
};
