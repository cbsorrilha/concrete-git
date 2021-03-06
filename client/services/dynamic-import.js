import React, { Component } from 'react';

export class DynamicImport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
    };
  }

  componentDidMount() {
    this.props
      .load()
      .then(component => {
        this.setState(() => ({
          component: component.default ? component.default : component,
        }));
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  render() {
    return this.props.children(this.state.component);
  }
}

export const dynamicImport = (load, { loading = <p>Loading</p> }) => props => (
  <DynamicImport load={load}>{Component => (Component === null ? loading : <Component {...props} />)}</DynamicImport>
);
