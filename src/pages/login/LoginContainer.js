import { compose, withState, withHandlers } from 'recompose';

import LoginView from './LoginView';

export default compose(
  withState('activeTabId', 'setActiveTabId', 0),
  withState('loginValue', 'setLoginValue', ''),
  withState('passwordValue', 'setPasswordValue', ''),
  withHandlers({
    handleTabChange: props => (e, id) => {
      props.setActiveTabId(id);
    },
    handleInput: props => (e, input = 'login') => {
      if (input === 'login') {
        props.setLoginValue(e.target.value);
      } else {
        props.setPasswordValue(e.target.value);
      }
    }
  }),
)(LoginView);