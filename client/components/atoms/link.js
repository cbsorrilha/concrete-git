import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkUI = ({ href, to, ...props }) => {
  if (!href && !to) {
    return <a {...props} />;
  }
  if (!to) {
    <a {...props} href={href} />;
  }
  return <Link {...props} to={to} />;
};

const color = ({ variant }) => {
  switch (variant) {
    case 'dark':
      return `
        color: #333333;
        &:hover {
          color: #666666;
        }
      `;

    case 'light':
      return `
        color: #eeeeee;
        &:hover {
          color: #cccccc;
        }
      `;

    default:
      return `
      color: #6A93db;
      &:hover {
        color: #2f65c4;
      }
    `;
  }
};

export default styled(LinkUI)`
  font-family: 'Hind', sans-serif;
  text-decoration: none;
  cursor: pointer;
  ${color};
`;
