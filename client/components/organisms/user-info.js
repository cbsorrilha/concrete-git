import React, { Fragment } from 'react';
import Title from '../atoms/title';
import Text from '../atoms/text';
import Image from '../atoms/image';
import GridItem from '../atoms/grid-item';
import GridContainer from '../atoms/grid-container';

export default function UserInfo({ avatar_url, name, company, followers, following, email, bio }) {
  return (
    <Fragment>
      <GridContainer
        gap={{ column: '1rem', row: '1rem' }}
        alignContent="center"
        template={{ columns: '20%'.repeat(4), rows: '1fr'.repeat(2) }}
        desktop={{ template: { columns: '25% auto' } }}
      >
        <GridItem column="2 / 4" desktop={{ column: '1 / 2' }}>
          <Image round src={avatar_url} />
        </GridItem>
        <GridItem align="center" justify="start" column="1 / 5" desktop={{ column: '2 / 2' }}>
          <GridContainer gap={{ row: '.5rem' }}>
            <GridItem>
              <Title hierarchy="2">{name}</Title>
            </GridItem>
            <GridItem>
              <Title hierarchy="3">{company}</Title>
            </GridItem>
            <GridItem>
              <Text>Followers: {followers}</Text>
            </GridItem>
            <GridItem>
              <Text>Following: {following}</Text>
            </GridItem>
            <GridItem>
              <Text>Email: {email ? email : 'Not Public'}</Text>
            </GridItem>
            <GridItem margin={{ top: '1rem' }}>
              <Text>{bio}</Text>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </Fragment>
  );
}
