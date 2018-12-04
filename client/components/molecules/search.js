import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../atoms/input';
import Button from '../atoms/button';
import GridContainer from '../atoms/grid-container';
import GridItem from '../atoms/grid-item';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange({ target }) {
    this.setState({
      value: target.value,
    });
  }

  render() {
    const { placeholder = '', onClick } = this.props;
    const placeholderText = `Busque ${placeholder ? `por ${placeholder}` : ''}`;
    return (
      <GridContainer gap={{ column: '1rem' }} template={{ columns: '70% 20%' }}>
        <GridItem>
          <SearchInput placeholder={placeholderText} value={this.state.value} onChange={this.onChange.bind(this)} />
        </GridItem>
        <GridItem>
          <Button onClick={onClick(this.state.value)}>Buscar</Button>
        </GridItem>
      </GridContainer>
    );
  }
}

const SearchInput = styled(Input)`
  padding: 0.5rem;
  width: 100%;
`;

export default Search;
