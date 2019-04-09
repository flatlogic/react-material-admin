import { compose, withState, withHandlers } from 'recompose';

import SidebarLinkView from './SidebarLinkView';

export default compose(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    toggleCollapse: (props) => (e) => {
      if (props.isSidebarOpened) {
        e.preventDefault();

        props.setIsOpen(!props.isOpen);
      }
    },
  }),
)(SidebarLinkView);