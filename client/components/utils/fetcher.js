import React, { Component } from 'react';
import Loading from '../molecules/loading';
import { request } from '../../services/request';

export class Fetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: null,
    };
  }

  componentDidMount() {
    const { endpoint, options = null } = this.props;
    request(endpoint, options)
      .then(({ data }) => {
        this.setState({
          loading: false,
          data: data,
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true,
        });
        if (err.response && err.response.data) {
          console.error(err.response.data.error);
        }
      });
  }

  componentDidUpdate(prevProps) {
    const { endpoint, options = null } = this.props;
    if (prevProps.endpoint === endpoint) {
      return false;
    }
    request(endpoint, options)
      .then(({ data }) => {
        this.setState({
          loading: false,
          data: data,
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true,
        });
        if (err.response && err.response.data) {
          console.error(err.response.data.error);
        }
      });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <div>oops... tivemos um problema :(</div>;
    }
    return this.props.render(this.props, this.state);
  }
}
