import React, { Fragment } from 'react';
import UserInfo from '../../components/organisms/user-info';
import RepoList from '../../components/organisms/repo-list';
import Link from '../../components/atoms/link';
import Text from '../../components/atoms/text';
import { Fetcher } from '../../components/utils/fetcher';

const getErrorMsg = errorCode => {
  switch (errorCode) {
    case 404:
      return 'Oops, user not found :(';
    case 403:
      return 'Oops, user not found :(';
    default:
      return 'Oops, something gone wrong :(';
  }
};

export default function UserPage({
  username,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
  fetchRepoListRequest,
  fetchRepoListSuccess,
  fetchRepoListError,
  reverseOrder,
  user,
  repoList,
  loading,
  error,
}) {
  if (error) {
    return (
      <Text size="md" align="center" desktop={{ size: 'hg', align: 'center' }}>
        {getErrorMsg(error.error.response.status)}
      </Text>
    );
  }
  return (
    <Fragment>
      <Link to="/">{'<'} Voltar </Link>
      <Fetcher
        endpoint={`users/${username}`}
        onRequest={fetchUserRequest}
        onSuccess={fetchUserSuccess}
        onError={fetchUserError}
      >
        {() => <UserInfo {...user} />}
      </Fetcher>
      {loading && (
        <Fetcher
          endpoint={`users/${username}/repos`}
          onRequest={fetchRepoListRequest}
          onSuccess={fetchRepoListSuccess}
          onError={fetchRepoListError}
        >
          {() => <RepoList {...repoList} reverseOrder={reverseOrder} />}
        </Fetcher>
      )}
    </Fragment>
  );
}
