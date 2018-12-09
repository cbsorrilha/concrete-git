import React from 'react';
import styled from 'styled-components';

const Loading = () => (
  <SvgUI xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle fill="none" stroke="#A6A6A6" strokeWidth="4" cx="50" cy="50" r="44" opacity=".5" />
    <circle fill="#fff" stroke="#003366" strokeWidth="3" cx="8" cy="54" r="6">
      <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 48"
        to="360 50 52"
        repeatCount="indefinite"
      />
    </circle>
  </SvgUI>
);

const SvgUI = styled.svg`
  max-width: 100px;
  margin: 5rem auto;
  display: block;
`;

export default Loading;
