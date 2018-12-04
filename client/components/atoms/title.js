import React, { Component } from 'react';
import styled from 'styled-components';

const defaultRules = ({ align = 'left' }) => `
  text-align: ${align}
`;

const H1 = styled.h1`
  font-size: 2rem;
  ${defaultRules};
`;
const H2 = styled.h1`
  font-size: 1.5rem;
  ${defaultRules};
`;
const H3 = styled.h1`
  font-size: 1rem;
  ${defaultRules};
`;
const H4 = styled.h1`
  font-size: 0.75rem;
  ${defaultRules};
`;
const H5 = styled.h1`
  font-size: 0.5rem;
  ${defaultRules};
`;
const H6 = styled.h1`
  font-size: 0.3rem;
  ${defaultRules};
`;

export default class Title extends Component {
  render() {
    switch (this.props.hierarchy) {
      case 2:
        return <H2 {...this.props} />;
      case 3:
        return <H3 {...this.props} />;
      case 4:
        return <H4 {...this.props} />;
      case 5:
        return <H5 {...this.props} />;
      case 6:
        return <H6 {...this.props} />;
      default:
        return <H1 {...this.props} />;
    }
  }
}
