import { compose } from 'recompose';
import { connect } from 'react-redux';

import { toggleSidebar } from './LayoutState';

import LayoutView from './LayoutView';


export default compose(
  connect(
    state => ({
      isSidebarOpened: state.layout.isSidebarOpened,
    }),
    { toggleSidebar },
  )
)(LayoutView);