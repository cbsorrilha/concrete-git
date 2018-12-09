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
    const { endpoint, options = null, onRequest = f => f, onSuccess = f => f, onError = f => f } = this.props;
    onRequest();
    request(endpoint, options)
      .then(({ data }) => {
        this.setState({
          loading: false,
          data: data,
        });
        onSuccess({ data });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
        });
        onError({ error });
        if (error.response && error.response.data) {
          console.error(error.response.data.error);
        }
      });
  }

  componentDidUpdate(prevProps) {
    const { endpoint, options = null, onRequest = f => f, onSuccess = f => f, onError = f => f } = this.props;
    if (prevProps.endpoint === endpoint) {
      return false;
    }
    onRequest();
    request(endpoint, options)
      .then(({ data }) => {
        this.setState({
          loading: false,
          data: data,
        });
        onSuccess({ data });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
        });

        if (error.response && error.response.data) {
          console.error(error.response.data.error);
          return onError(error.response);
        }
        onError({ error });
      });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <div>oops... tivemos um problema :(</div>;
    }
    return this.props.children(this.props, this.state);
  }
}
