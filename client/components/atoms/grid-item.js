import React, { Component } from 'react';
import styled from 'styled-components';

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
const GridItemUI = styled(GridItem)`
  grid-area: ${props => props.area};
  justify-self: ${props => props.justify};
  align-self: ${props => props.align};
  place-self: ${props => props.place};
  ${gridColumn};
  ${gridRow};
`;

export default GridItemUI;
