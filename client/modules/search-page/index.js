import { connect } from 'react-redux';
import SearchPage from './search-page';
import actions from './actions';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  actions
)(SearchPage);
