import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../helpers';

const Button = ({ variant = 'default', maxWidth = '100%', ...props }) => <button {...props} />;

const variants = {
  primary: {
    backgroundColor: '#2164d9',
    backgroundHover: '#184ba2',
    color: '#FFF',
    disabledBackgroundColor: '#4f86e5',
    disabledColor: '',
  },
  default: {
    backgroundColor: '#A6A6A6',
    backgroundHover: '#969696',
    color: '#FFF',
  },
};

const padding = ({ padding = '.5rem .2rem' }) => {
  if (typeof padding == 'string') {
    return `padding: ${padding};`;
  }

  return `
    ${padding.top ? `padding-top: ${padding.top}` : '.5rem .2rem'};
    ${padding.right ? `padding-right: ${padding.right}` : '.5rem .2rem'};
    ${padding.bottom ? `padding-bottom: ${padding.bottom}` : '.5rem .2rem'};
    ${padding.left ? `padding-left: ${padding.left}` : '.5rem .2rem'};
  `;
};

const disabled = ({ disabled }) =>
  !disabled
    ? `
      &:hover,
      &:focus {
        opacity: 0.9;
      }`
    : '';

const buttonStyles = ({ width = '100%', variant = 'default', disabled = false }) => css`
  width: ${width};
  max-width: ${props => `${props.maxWidth}`};
  border: none;
  background-color: ${variants[variant].backgroundColor};
  color: ${variants[variant].color};
  ${!disabled ? '' : `opacity:0.5;`};
  outline: none;
  font-size: 1rem;
`;

const ButtonUI = styled(Button)`
  ${buttonStyles};
  ${padding};
  ${disabled};
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) => `
    ${buttonStyles(tablet)}
    ${padding(tablet)}
    ${disabled(tablet)}
    `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) => `
    ${buttonStyles(desktop)}
    ${padding(desktop)}
    ${disabled(desktop)}
    `};
  }
`;

export default ButtonUI;

ButtonUI.defaultProps = {
  variant: 'default',
  disabled: false,
};

ButtonUI.propTypes = {
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary']),
  disabled: PropTypes.bool,
};
