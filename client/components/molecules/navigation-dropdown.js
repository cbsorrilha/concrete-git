import React, { Component } from 'react';

class NavigationDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return <div>{props.children}</div>;
  }
}

export default NavigationDropdown;
