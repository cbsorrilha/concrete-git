import React from 'react';
import RepoDetails from '../../components/organisms/repo-details';
import { Fetcher } from '../../components/utils/fetcher';
import GridContainer from '../../components/atoms/grid-container';
import GridItem from '../../components/atoms/grid-item';
import Loading from '../../components/molecules/loading';

export default function RepoPage({ repo, loading, error, repoId, fetchRepoRequest, fetchRepoSuccess, fetchRepoError }) {
  if (loading) {
    <GridContainer>
      <GridItem>
        <Loading />
      </GridItem>
    </GridContainer>;
  }

  if (!repo) {
    return (
      <Fetcher
        endpoint={`repos/${repoId}`}
        onRequest={fetchRepoRequest}
        onSuccess={fetchRepoSuccess}
        onError={fetchRepoError}
      >
        {() => <RepoDetails loading={loading} error={error} {...repo} />}
      </Fetcher>
    );
  }
  return <RepoDetails loading={loading} error={error} {...repo} />;
}
