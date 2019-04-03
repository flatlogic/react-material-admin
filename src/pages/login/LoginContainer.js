import { compose, withState, withHandlers, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import LoginView from "./LoginView";
import { loginUser, resetError } from "./LoginState";

export default compose(
  connect(
    state => ({
      isLoading: state.login.isLoading,
      isAuthenticated: state.login.isAuthenticated,
      error: state.login.error
    }),
    { loginUser, resetError }
  ),
  withRouter,
  withState("activeTabId", "setActiveTabId", 0),
  withState("nameValue", "setNameValue", ""),
  withState("loginValue", "setLoginValue", ""),
  withState("passwordValue", "setPasswordValue", ""),
  withHandlers({
    handleTabChange: props => (e, id) => {
      props.setActiveTabId(id);
    },
    handleInput: props => (e, input = "login") => {
      if (props.error) {
        props.resetError();
      }

      if (input === "login") {
        props.setLoginValue(e.target.value);
      } else if (input === "password") {
        props.setPasswordValue(e.target.value);
      } else if (input === "name") {
        props.setNameValue(e.target.value);
      }
    },
    handleLoginButtonClick: props => () => {
      props.loginUser(props.loginValue, props.passwordValue);
    }
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (!this.props.error && nextProps.error) {
        this.props.setPasswordValue("");
      }
    }
  })
)(LoginView);
