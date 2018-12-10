import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media, padding, margin } from '../helpers';

class GridItem extends Component {
  render() {
    return <div {...this.props} />;
  }
}

const gridColumn = ({ column = null }) => {
  if (!column) {
    return '';
  }

  if (typeof column == 'string') {
    return `grid-column: ${column};`;
  }

  return `
    ${column.end ? `grid-column-end: ${column.end};` : ''}
    ${column.gap ? `grid-column-gap: ${column.gap};` : ''}
    ${column.start ? `grid-column-start: ${column.start};` : ''}
  `;
};

const gridRow = ({ row = null }) => {
  if (!row) {
    return '';
  }

  if (typeof row == 'string') {
    return `grid-row: ${row};`;
  }

  return `
    ${row.end ? `grid-row-end: ${row.end};` : ''}
    ${row.gap ? `grid-row-gap: ${row.gap};` : ''}
    ${row.start ? `grid-row-start: ${row.start};` : ''}
  `;
};

const gridItemStyles = ({ area = null, justify = null, align = null }) => css`
  grid-area: ${area};
  justify-self: ${justify};
  align-self: ${align};
`;

const GridItemUI = styled(GridItem)`
  ${gridItemStyles};
  ${gridColumn};
  ${gridRow};
  ${padding};
  ${margin};
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) => css`
      ${gridItemStyles(tablet)};
      ${gridColumn(tablet)};
      ${gridRow(tablet)};
      ${tablet.padding ? padding(tablet) : ''};
      ${tablet.margin ? margin(tablet) : ''};
    `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) => css`
      ${gridItemStyles(desktop)};
      ${gridColumn(desktop)};
      ${gridRow(desktop)};
      ${desktop.padding ? padding(desktop) : ''};
      ${desktop.margin ? margin(desktop) : ''};
    `};
  }
`;

export default GridItemUI;

GridItemUI.propTypes = {
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  desktop: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  area: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  column: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  row: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
