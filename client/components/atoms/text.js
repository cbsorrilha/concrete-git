import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../helpers';

const textStyles = ({ align = 'left', color = '#333', weight = 'normal', size = 'md' }) => css`
  ${!align ? '' : `text-align: ${align}`};
  ${!color ? '' : `color: ${color}`};
  ${!weight ? '' : `weight: ${weight}`};
`;

const getFontSize = ({ size = 'md' }) => {
  switch (size) {
    case 'xs':
      return '10px';
    case 'sm':
      return '12px';
    case 'md':
      return '14px';
    case 'lg':
      return '18px';
    case 'hg':
      return '24px';
    default:
      return size;
  }
};

const initialTextProps = { align: false, color: false, weight: false, size: false };

const TextUI = styled.p`
  width: 100%;
  ${textStyles};
  font-size: ${getFontSize};
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = initialTextProps }) => css`
      ${textStyles(tablet)};
      ${!tablet.size
        ? ''
        : css`
            font-size: ${getFontSize(tablet)};
          `};
    `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = initialTextProps }) => css`
      ${textStyles(desktop)};
      ${!desktop.size
        ? ''
        : css`
            font-size: ${getFontSize(desktop)};
          `};
    `};
  }
`;

export default TextUI;

TextUI.propTypes = {
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  desktop: PropTypes.object,
  align: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string,
};
