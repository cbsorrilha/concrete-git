import { connect } from 'react-redux';
import UserPage from './user-page';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
  fetchRepoListRequest,
  fetchRepoListSuccess,
  fetchRepoListError,
  reverseOrder,
} from './actions';
import userPageReducer from './reducer';

export const reducer = userPageReducer;

const mapStateToProps = ({ modules }, { match }) => ({
  username: match.params.username,
  user: modules.userPage.user,
  loading: modules.userPage.loading,
  error: modules.userPage.error,
  repoList: modules.userPage.repoList,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUserRequest: () => {
      dispatch(fetchUserRequest());
    },
    fetchUserSuccess: data => {
      dispatch(fetchUserSuccess(data));
    },
    fetchUserError: error => {
      dispatch(fetchUserError(error));
    },
    fetchRepoListRequest: () => {
      dispatch(fetchRepoListRequest());
    },
    fetchRepoListSuccess: data => {
      dispatch(fetchRepoListSuccess(data));
    },
    fetchRepoListError: error => {
      dispatch(fetchRepoListError(error));
    },
    reverseOrder: () => {
      dispatch(reverseOrder());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
