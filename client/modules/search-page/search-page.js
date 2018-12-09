import React from 'react';
import GridContainer from '../../components/atoms/grid-container';
import GridItem from '../../components/atoms/grid-item';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

export default function SearchPage({ updateSearchField, searchField, goToProfilePage }) {
  return (
    <form>
      <GridContainer gap="5%" template={{ columns: '70% 25%' }}>
        <GridItem>
          <Input placeholder="Type an username" onChange={updateSearchField} value={searchField} />
        </GridItem>
        <GridItem>
          <Button type="submit" onClick={goToProfilePage(searchField)} variant="primary">
            Find
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
}
