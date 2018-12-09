import { connect } from 'react-redux';
import SearchPage from './search-page';
import { updateSearchField } from './actions';
import searchPageReducer from './reducer';

export const reducer = searchPageReducer;

const mapStateToProps = ({ modules }) => ({ searchField: modules.searchPage.searchField });

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateSearchField: ({ target }) => {
      dispatch(updateSearchField(target.value));
    },
    goToProfilePage: username => e => {
      e.preventDefault();
      history.push(`/user/${username}`);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
