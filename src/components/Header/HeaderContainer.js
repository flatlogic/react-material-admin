import { compose, withState, withHandlers } from 'recompose';
import HeaderView from './HeaderView';

export default compose(
  withState('mailMenu', 'setMailMenu', false),
  withState('isMailsUnread', 'setIsMailsUnread', true),
  withState('notificationsMenu', 'setNotificationsMenu', false),
  withState('isNotificationsUnread', 'setIsNotificationsUnread', true),
  withState('isSearchOpen', 'setSearchOpen', false),
  withHandlers({
    openMailMenu: props => event => {
      props.setMailMenu(event.currentTarget);
      props.setIsMailsUnread(false);
    },
    closeMailMenu: props => () => {
      props.setMailMenu(null);
    },
    openNotificationsMenu: props => event => {
      props.setNotificationsMenu(event.currentTarget);
      props.setIsNotificationsUnread(false);
    },
    closeNotificationsMenu: props => () => {
      props.setNotificationsMenu(null);
    },
    toggleSearch: props => () => {
      props.setSearchOpen(!props.isSearchOpen);
    }
  })
)(HeaderView);