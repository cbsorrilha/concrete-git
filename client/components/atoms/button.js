import React from 'react';
import styled from 'styled-components';

const Button = ({ variant = 'default', maxWidth = '100%', ...props }) => <button {...props} />;

const types = {
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

const padding = ({ padding = '0.5rem 0' }) => {
  if (typeof padding == 'string') {
    return `padding: ${padding};`;
  }

  return `
    ${padding.top && `padding-top: ${padding.top}`};
    ${padding.right && `padding-right: ${padding.right}`};
    ${padding.bottom && `padding-bottom: ${padding.bottom}`};
    ${padding.left && `padding-left: ${padding.left}`};
  `;
};

export default styled(Button)`
  background-color: ${({ variant = 'default' }) => types[variant].backgroundColor};
  color: ${({ variant = 'default' }) => types[variant].color};
  ${props => props.disabled && `opacity:0.5;`};
  font-size: 1rem;
  border: none;
  width: ${({ width = '100%' }) => width};
  ${padding};
  outline: none;
  max-width: ${props => `${props.maxWidth}`};
  ${({ disabled }) =>
    !disabled
      ? `
        &:hover,
        &:focus {
          opacity: 0.9;
        }`
      : ''};
`;
