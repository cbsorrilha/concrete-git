import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../helpers';

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

const gridStyles = ({
  height = 'auto',
  width = '100%',
  justifyItems = null,
  alignItems = null,
  placeItems = null,
  justifyContent = null,
  alignContent = null,
  placeContent = null,
  grid = null,
}) => css`
  ${!height ? '' : `height: ${height};`};
  ${!width ? '' : `width: ${width};`};
  ${!justifyItems ? '' : `justify-items: ${justifyItems};`};
  ${!alignItems ? '' : `align-items: ${alignItems};`};
  ${!placeItems ? '' : `place-items: ${placeItems}`};
  ${!justifyContent ? '' : `justify-content: ${justifyContent}`};
  ${!alignContent ? '' : `align-content: ${alignContent}`};
  ${!placeContent ? '' : `place-content: ${placeContent}`};
  ${!grid ? '' : `grid: ${grid}`};
`;

const GridContainerUI = styled(GridContainer)`
  display: ${({ inline = false }) => (inline ? 'inline-' : '')}grid;
  ${gridStyles};
  ${gridAuto};
  ${gridGap};
  ${gridTemplate};

  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) => css`
    ${gridStyles(tablet)}
    ${gridAuto(tablet)}
    ${gridGap(tablet)}
    ${gridTemplate(tablet)}
    `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) => css`
    ${gridStyles(desktop)}
    ${gridAuto(desktop)}
    ${gridGap(desktop)}
    ${gridTemplate(desktop)}
    `};
  }
`;

export default GridContainerUI;

GridContainerUI.propTypes = {
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  desktop: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  justifyItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  placeItems: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly']),
  placeContent: PropTypes.string,
  grid: PropTypes.string,
};
