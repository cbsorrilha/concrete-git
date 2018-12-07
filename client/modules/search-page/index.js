import { connect } from 'react-redux';
import SearchPage from './search-page';
import actions from './actions';

const initialState = {
  searchField: '',
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_SEARCH_FIELD':
      return {
        searchField: payload.value,
        ...state,
      };

    default:
      return state;
  }
};

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  actions
)(SearchPage);
