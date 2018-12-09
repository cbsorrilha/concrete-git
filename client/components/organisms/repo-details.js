import React from 'react';
import Title from '../atoms/title';
import Text from '../atoms/text';
import Link from '../atoms/link';
import GridContainer from '../atoms/grid-container';
import GridItem from '../atoms/grid-item';

export default function RepoDetails({ full_name, html_url, language, stargazers_count, description, owner = {} }) {
  return (
    <GridContainer gap={{ row: '.5rem' }}>
      <GridItem>
        <Link to={`/user/${owner.login}`}>{'<'} Voltar</Link>
      </GridItem>
      <GridItem>
        <Title hierarchy="2">{full_name}</Title>
      </GridItem>
      <GridItem>
        <Text>{description}</Text>
      </GridItem>
      <GridItem>
        <Text>Stars: {stargazers_count}</Text>
      </GridItem>
      <GridItem>
        <Text>Language: {language}</Text>
      </GridItem>
      <GridItem>
        <Link href={html_url}>See on Github</Link>
      </GridItem>
    </GridContainer>
  );
}
