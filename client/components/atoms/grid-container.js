import React from 'react';
import styled from 'styled-components';

const GridContainer = ({ ...props }) => <div {...props} />;

const gridTemplate = ({ template = null }) => {
  if (!template) {
    return '';
  }

  if (typeof template == 'string') {
    return `grid-template: ${template};`;
  }

  return `
    ${template.areas ? `grid-template-areas: ${template.areas}` : ''};
    ${template.columns ? `grid-template-columns: ${template.columns}` : ''};
    ${template.rows ? `grid-template-rows: ${template.rows}` : ''};
  `;
};

const gridGap = ({ gap = null }) => {
  if (!gap) {
    return '';
  }

  if (typeof gap == 'string') {
    return `grid-gap: ${gap};`;
  }

  return `
    ${gap.column ? `grid-column-gap: ${gap.column}` : ''};
    ${gap.row ? `grid-row-gap: ${gap.row}` : ''};
  `;
};

const gridAuto = ({ auto = null }) => {
  if (!auto) {
    return '';
  }

  if (typeof auto == 'string') {
    return `grid-auto: ${auto};`;
  }

  return `
    ${auto.flow ? `grid-auto-flow: ${auto.flow}` : ''};
    ${auto.columns ? `grid-auto-columns: ${auto.columns}` : ''};
    ${auto.rows ? `grid-auto-rows: ${auto.rows}` : ''};
  `;
};

const GridContainerUI = styled(GridContainer)`
  height: ${({ height = 'auto' }) => `${height}`};
  width: ${({ width = '100%' }) => `${width}`};
  display: ${({ inline = false }) => (inline ? 'inline-' : '')}grid;
  ${({ justifyItems = null }) => (!justifyItems ? '' : `justify-items: ${justifyItems}`)};
  ${({ alignItems = null }) => (!alignItems ? '' : `align-items: ${alignItems}`)};
  ${({ placeItems = null }) => (!placeItems ? '' : `place-items: ${placeItems}`)};
  ${({ justifyContent = null }) => (!justifyContent ? '' : `justify-content: ${justifyContent}`)};
  ${({ alignContent = null }) => (!alignContent ? '' : `align-content: ${alignContent}`)};
  ${({ placeContent = null }) => (!placeContent ? '' : `place-content: ${placeContent}`)};
  ${gridAuto};
  ${gridGap};
  ${gridTemplate};
  ${({ grid = null }) => (!grid ? '' : `grid: ${grid}`)};
`;

export default GridContainerUI;
