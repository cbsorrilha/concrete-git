import React from 'react';
import styled from 'styled-components';

const Card = ({ ...props }) => <div {...props} />;

const padding = ({ padding = '1.5rem' }) => {
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

const setMaxWidth = (maxWidth = '100%') => {
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

const CardUI = styled(Card)`
  display: block;
  width: ${setWidth};
  ${({ maxWidth }) => (maxWidth ? `max-width: ${setMaxWidth(maxWidth)};` : '')}
  height: ${({ height = '100%' }) => `${height}`};
  ${padding}
  background-color: ${({ color = 'white' }) => color};
  -webkit-box-shadow: 2px 2px 10px 0px rgba(175, 175, 175, 1);
  -moz-box-shadow: 2px 2px 10px 0px rgba(175, 175, 175, 1);
  box-shadow: 2px 2px 10px 0px rgba(175, 175, 175, 1);
`;

export default CardUI;
