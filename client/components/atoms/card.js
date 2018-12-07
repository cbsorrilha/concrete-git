import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../helpers';

const Card = ({ ...props }) => <div {...props} />;

const padding = ({ padding = '1.5rem' }) => {
  if (typeof padding == 'string') {
    return `padding: ${padding};`;
  }

  return `
    ${padding.top ? `padding-top: ${padding.top}` : `padding-top: 1.5rem`};
    ${padding.right ? `padding-right: ${padding.right}` : `padding-right: 1.5rem`};
    ${padding.bottom ? `padding-bottom: ${padding.bottom}` : `padding-bottom: 1.5rem`};
    ${padding.left ? `padding-left: ${padding.left}` : `padding-left: 1.5rem`};
  `;
};

const setMaxWidth = ({ maxWidth = false }) => {
  if (!maxWidth) {
    return '';
  }
  switch (maxWidth) {
    case 'xs':
      return '50px';
    case 'sm':
      return '100px';
    case 'md':
      return '300px';
    case 'lg':
      return '600px';
    default:
      return maxWidth;
  }
};

const setWidth = ({ width = '100%' }) => {
  switch (width) {
    case 'xs':
      return '100px';
    case 'sm':
      return '200px';
    case 'md':
      return '400px';
    case 'lg':
      return '800px';
    default:
      return width;
  }
};

const cardStyles = ({ height = '100%', color = 'white' }) => css`
  height: ${height};
  background-color: ${color};
`;

const CardUI = styled(Card)`
  display: block;
  ${cardStyles};
  ${padding};
  width: ${setWidth};
  max-width: ${setMaxWidth};
  -webkit-box-shadow: 2px 2px 10px 0px rgba(175, 175, 175, 1);
  -moz-box-shadow: 2px 2px 10px 0px rgba(175, 175, 175, 1);
  box-shadow: 2px 2px 10px 0px rgba(175, 175, 175, 1);

  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) =>
      css`
        ${cardStyles(tablet)};
        ${padding(tablet)};
        ${!tablet.width ? '' : `width: ${setWidth(tablet)}`};
        ${!tablet.maxWidth ? '' : `max-width: ${setMaxWidth(tablet)}`};
      `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) =>
      css`
        ${cardStyles(desktop)};
        ${padding(desktop)};
        ${!desktop.width ? '' : `width: ${setWidth(desktop)}`};
        ${!desktop.maxWidth ? '' : `max-width: ${setMaxWidth(desktop)}`};
      `};
  }
`;

export default CardUI;

CardUI.propTypes = {
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxWidth: PropTypes.oneOfType([PropTypes.oneOf(['xs', 'sm', 'md', 'lg']), PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.oneOf(['xs', 'sm', 'md', 'lg']), PropTypes.string]),
  height: PropTypes.string,
  color: PropTypes.string,
};
