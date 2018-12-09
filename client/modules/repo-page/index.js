import { connect } from 'react-redux';
import { fetchRepoRequest, fetchRepoSuccess, fetchRepoError } from './actions';
import RepoPage from './repo-page';
import repoPageReducer from './reducer';

export const reducer = repoPageReducer;

const mapStateToProps = ({ modules }, { match, history }) => {
  const { entities } = modules.userPage.repoList;
  const repoId = match.params.repoId.replace('%2F', '/');
  return {
    repoId,
    repo: entities[repoId],
    loading: modules.repoPage.loading,
    error: modules.repoPage.error,
    history,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepoRequest: () => {
      dispatch(fetchRepoRequest());
    },
    fetchRepoSuccess: data => {
      dispatch(fetchRepoSuccess(data));
    },
    fetchRepoError: error => {
      dispatch(fetchRepoError(error));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoPage);
