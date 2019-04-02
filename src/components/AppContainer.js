import { compose } from 'recompose';
import { connect } from 'react-redux';

import AppView from './App';

export default compose(
  connect(
    state => ({
      isAuthenticated: state.login.isAuthenticated,
    })
  )
)(AppView);