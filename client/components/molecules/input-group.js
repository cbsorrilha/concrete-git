import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Input from '../atoms/input';

class InputGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  focus() {
    this.setState({ focus: true });
  }

  blur() {
    this.setState({ focus: false });
  }

  render() {
    return (
      <GroupWrapper>
        <LabelUI
          value={this.props.value}
          focus={this.state.focus}
          onClick={this.focus.bind(this)}
          htmlFor={this.props.name}
        >
          {this.props.label}
        </LabelUI>
        <Input {...this.props} onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)} />
      </GroupWrapper>
    );
  }
}

const LabelUI = styled.label`
  position: absolute;
  left: 0.4rem;
  top: 0.6rem;
  color: #999;
  z-index: 10;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
  ${({ focus, value = '' }) =>
    (focus || value.length > 0) &&
    `
    transform: translateY(-175%);
    font-size: 1rem;
    `};
`;

const GroupWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default InputGroup;
