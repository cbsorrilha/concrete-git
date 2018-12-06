import { connect } from 'react-redux';
import SearchPage from './search-page';
import actions from './actions';
import searchPageReducer from './reducer';

export const reducer = searchPageReducer;

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  actions
)(SearchPage);
