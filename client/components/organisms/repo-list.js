import React, { Fragment } from 'react';
import GridItem from '../atoms/grid-item';
import GridContainer from '../atoms/grid-container';
import FlexItem from '../atoms/flex-item';
import FlexContainer from '../atoms/flex-container';
import Card from '../atoms/card';
import Link from '../atoms/link';
import Text from '../atoms/text';
import Loading from '../molecules/loading';

const mobileTemplate = { columns: 'auto 25%', rows: '50% 50%' };
const desktopTemplate = { columns: 'auto 25% 25%', rows: '100%' };

const RepoCard = repo => (
  <FlexItem margin={{ bottom: '1.5rem' }}>
    <Card padding="1rem" height="5rem" desktop={{ padding: '1rem' }}>
      <GridContainer gap={{ row: '1rem' }} template={mobileTemplate} desktop={{ template: desktopTemplate }}>
        <GridItem desktop={{ column: '1 / 2', row: '1 / 2' }}>
          <Link to={`/repo/${repo.full_name.replace('/', '%2F')}`}>{repo.name}</Link>
        </GridItem>
        <GridItem desktop={{ column: '3 / 4', row: '1 / 2' }}>
          <Text align="right">Stars: {repo.stargazers_count}</Text>
        </GridItem>
        <GridItem column="1 / 3" desktop={{ column: '2 / 3', row: '1 / 2' }}>
          <Text align="right">
            <Link href={repo.html_url}>See on github.com</Link>
          </Text>
        </GridItem>
      </GridContainer>
    </Card>
  </FlexItem>
);

export default function RepoList({ loading, error, entities, keys, order, reverseOrder }) {
  const newOrderName = order === 'Descending' ? 'Ascending' : 'Descending';
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <GridContainer margin={{ top: '3rem' }}>
        <GridItem>
          <Text align="center" size="md" desktop={{ size: 'lg', align: 'center' }}>
            Oops, something gone wrong. :(
          </Text>
        </GridItem>
      </GridContainer>
    );
  }
  return (
    <Fragment>
      <GridContainer template={{ rows: 'auto auto auto' }} margin={{ top: '3rem' }}>
        <GridItem>
          <hr />
        </GridItem>
        <GridItem>
          <FlexContainer justify="flex-end">
            <FlexItem>
              <Link onClick={reverseOrder}>Change to {newOrderName} Order</Link>
            </FlexItem>
          </FlexContainer>
        </GridItem>
        <GridItem margin={{ top: '1.5rem' }}>
          <FlexContainer direction="column">
            <FlexItem>
              {keys.length < 1 && (
                <Text align="center" size="lg">
                  Sem repositórios
                </Text>
              )}
            </FlexItem>
            {keys.length > 0 && keys.map(key => <RepoCard key={entities[key].id} {...entities[key]} />)}
          </FlexContainer>
        </GridItem>
      </GridContainer>
    </Fragment>
  );
}
