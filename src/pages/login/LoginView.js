import React from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  withStyles,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade
} from "@material-ui/core";
import classnames from "classnames";

import logo from "./logo.svg";
import google from "../../images/google.svg";

const Login = ({ classes, ...props }) => (
  <Grid container className={classes.container}>
    <div className={classes.logotypeContainer}>
      <img src={logo} alt="logo" className={classes.logotypeImage} />
      <Typography className={classes.logotypeText}>Material Admin</Typography>
    </div>
    <div className={classes.formContainer}>
      <div className={classes.form}>
        <Tabs
          value={props.activeTabId}
          onChange={props.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Login" classes={{ root: classes.tab }} />
          <Tab label="New User" classes={{ root: classes.tab }} />
        </Tabs>
        {props.activeTabId === 0 && (
          <React.Fragment>
            <Typography variant="h1" className={classes.greeting}>
              Good Morning, User
            </Typography>
            <Button size="large" className={classes.googleButton}>
              <img src={google} alt="google" className={classes.googleIcon} />
              &nbsp;Sign in with Google
            </Button>
            <div className={classes.formDividerContainer}>
              <div className={classes.formDivider} />
              <Typography className={classes.formDividerWord}>or</Typography>
              <div className={classes.formDivider} />
            </div>
            <Fade in={props.error}>
              <Typography color="secondary" className={classes.errorMessage}>
                Something is wrong with your login or password :(
              </Typography>
            </Fade>
            <TextField
              id="email"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.loginValue}
              onChange={e => props.handleInput(e, "login")}
              margin="normal"
              placeholder="Email Adress"
              type="email"
              fullWidth
            />
            <TextField
              id="password"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.passwordValue}
              onChange={e => props.handleInput(e, "password")}
              margin="normal"
              placeholder="Password"
              type="password"
              fullWidth
            />
            <div className={classes.formButtons}>
              {props.isLoading ? (
                <CircularProgress size={26} className={classes.loginLoader} />
              ) : (
                <Button
                  disabled={
                    props.loginValue.length === 0 ||
                    props.passwordValue.length === 0
                  }
                  onClick={props.handleLoginButtonClick}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Login
                </Button>
              )}
              <Button
                color="primary"
                size="large"
                className={classes.forgetButton}
              >
                Forget Password
              </Button>
            </div>
          </React.Fragment>
        )}
        {props.activeTabId === 1 && (
          <React.Fragment>
            <Typography variant="h1" className={classes.greeting}>
              Welcome!
            </Typography>
            <Typography variant="h2" className={classes.subGreeting}>
              Create your account
            </Typography>
            <Fade in={props.error}>
              <Typography color="secondary" className={classes.errorMessage}>
                Something is wrong with your login or password :(
              </Typography>
            </Fade>
            <TextField
              id="name"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.nameValue}
              onChange={e => props.handleInput(e, "name")}
              margin="normal"
              placeholder="Full Name"
              type="email"
              fullWidth
            />
            <TextField
              id="email"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.loginValue}
              onChange={e => props.handleInput(e, "login")}
              margin="normal"
              placeholder="Email Adress"
              type="email"
              fullWidth
            />
            <TextField
              id="password"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.passwordValue}
              onChange={e => props.handleInput(e, "password")}
              margin="normal"
              placeholder="Password"
              type="password"
              fullWidth
            />
            <div className={classes.creatingButtonContainer}>
              {props.isLoading ? (
                <CircularProgress size={26} />
              ) : (
                <Button
                  onClick={props.handleLoginButtonClick}
                  disabled={
                    props.loginValue.length === 0 ||
                    props.passwordValue.length === 0 ||
                    props.nameValue.length === 0
                  }
                  size="large"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.createAccountButton}
                >
                  Create your account
                </Button>
              )}
            </div>
            <div className={classes.formDividerContainer}>
              <div className={classes.formDivider} />
              <Typography className={classes.formDividerWord}>or</Typography>
              <div className={classes.formDivider} />
            </div>
            <Button
              size="large"
              className={classnames(
                classes.googleButton,
                classes.googleButtonCreating
              )}
            >
              <img src={google} alt="google" className={classes.googleIcon} />
              &nbsp;Sign in with Google
            </Button>
          </React.Fragment>
        )}
      </div>
      <Typography color="primary" className={classes.copyright}>
        © 2014-2019 Flatlogic, LLC. All rights reserved.
      </Typography>
    </div>
  </Grid>
);

const styles = theme => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0
  },
  logotypeContainer: {
    backgroundColor: theme.palette.primary.main,
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%"
    },
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  logotypeImage: {
    width: 165,
    marginBottom: theme.spacing.unit * 4
  },
  logotypeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down("md")]: {
      fontSize: 48
    }
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%"
    }
  },
  form: {
    width: 320
  },
  tab: {
    fontWeight: 400,
    fontSize: 18
  },
  greeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: theme.spacing.unit * 4
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: theme.spacing.unit * 2
  },
  googleButton: {
    marginTop: theme.spacing.unit * 6,
    boxShadow: theme.customShadows.widget,
    backgroundColor: "white",
    width: "100%",
    textTransform: "none"
  },
  googleButtonCreating: {
    marginTop: 0
  },
  googleIcon: {
    width: 30,
    marginRight: theme.spacing.unit * 2
  },
  creatingButtonContainer: {
    marginTop: theme.spacing.unit * 2.5,
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  createAccountButton: {
    height: 46,
    textTransform: "none"
  },
  formDividerContainer: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    display: "flex",
    alignItems: "center"
  },
  formDividerWord: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: theme.palette.text.hint + "40"
  },
  errorMessage: {
    textAlign: "center"
  },
  textFieldUnderline: {
    "&:before": {
      borderBottomColor: theme.palette.primary.light
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.main
    },
    "&:hover:before": {
      borderBottomColor: `${theme.palette.primary.light} !important`
    }
  },
  textField: {
    borderBottomColor: theme.palette.background.light
  },
  formButtons: {
    width: "100%",
    marginTop: theme.spacing.unit * 4,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  forgetButton: {
    textTransform: "none",
    fontWeight: 400
  },
  loginLoader: {
    marginLeft: theme.spacing.unit * 4
  },
  copyright: {
    position: "absolute",
    bottom: theme.spacing.unit * 2
  }
});

export default withStyles(styles, { withTheme: true })(Login);
