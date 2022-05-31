import React, { useState, useEffect } from 'react';
import {
  Grid,
  CircularProgress,
  Tabs,
  Tab,
  Grow,
  TextField as Input,
  Typography,
} from '@mui/material';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

// styles
import useStyles from './styles';

// logo
import logo from './logo.svg';
import google from '../../images/google.svg';

// context
import {
  useUserDispatch,
  loginUser,
  registerUser,
  sendPasswordResetEmail,
} from '../../context/UserContext';
import { receiveToken, doInit } from '../../context/UserContext';

//components
import { Button } from '../../components/Wrappers';
import Widget from '../../components/Widget';
import config from '../../config';

const getGreeting = () => {
  const d = new Date();
  if (d.getHours() >= 4 && d.getHours() <= 12) {
    return 'Good Morning';
  } else if (d.getHours() >= 13 && d.getHours() <= 16) {
    return 'Good Day';
  } else if (d.getHours() >= 17 && d.getHours() <= 23) {
    return 'Good Evening';
  } else {
    return 'Good Night';
  }
};

function Login(props) {
  let classes = useStyles();
  const tab = new URLSearchParams(props.location.search).get('tab');

  // global
  let userDispatch = useUserDispatch();

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const token = params.get('token');
    if (token) {
      receiveToken(token, userDispatch);
      doInit()(userDispatch);
    }
  }, []); // eslint-disable-line

  // local
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  let [activeTabId, setActiveTabId] = useState(+tab ?? 0);
  let [nameValue, setNameValue] = useState('');
  let [loginValue, setLoginValue] = useState('admin@flatlogic.com');
  let [passwordValue, setPasswordValue] = useState('password');
  let [forgotEmail, setForgotEmail] = useState('');
  let [isForgot, setIsForgot] = useState(false);

  let isLoginFormValid = () => {
    return loginValue.length !== 0 && passwordValue.length !== 0;
  };

  let loginOnEnterKey = (event) => {
    if (event.key === 'Enter' && isLoginFormValid()) {
      loginUser(
        userDispatch,
        loginValue,
        passwordValue,
        props.history,
        setIsLoading,
        setError,
      );
    }
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt='logo' className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>
          React Material Admin Full
        </Typography>
      </div>
      <div
        className={
          !isForgot ? classes.formContainer : classes.customFormContainer
        }
      >
        <div className={classes.form}>
          {isForgot ? (
            <div>
              <Input
                id='password'
                InputProps={{
                  classes: {
                    underline: classes.InputUnderline,
                    input: classes.Input,
                  },
                }}
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                margin='normal'
                placeholder='Email'
                type='Email'
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={forgotEmail.length === 0}
                    onClick={() =>
                      sendPasswordResetEmail(forgotEmail)(userDispatch)
                    }
                    variant='contained'
                    color='primary'
                    size='large'
                  >
                    Send
                  </Button>
                )}
                <Button
                  color='primary'
                  size='large'
                  onClick={() => setIsForgot(!isForgot)}
                  className={classes.forgetButton}
                >
                  Back to login
                </Button>
              </div>
            </div>
          ) : (
            <>
              <Tabs
                value={activeTabId}
                onChange={(e, id) => setActiveTabId(id)}
                indicatorColor='primary'
                textColor='primary'
                centered
              >
                <Tab label='Login' classes={{ root: classes.tab }} />
                <Tab label='New User' classes={{ root: classes.tab }} />
              </Tabs>
              {activeTabId === 0 && (
                <React.Fragment>
                  {config.isBackend ? (
                    <Widget
                      disableWidgetMenu
                      inheritHeight
                      style={{ marginTop: 32 }}
                    >
                      <Typography
                        variant={'body2'}
                        component="div"
                        style={{ textAlign: 'center' }}
                      >
                        This is a real app with Node.js backend - use
                        <Typography variant={'body2'} weight={'bold'}>
                          "admin@flatlogic.com / password"
                        </Typography>{' '}
                        to login!
                      </Typography>
                    </Widget>
                  ) : null}
                  <Typography variant='h1' className={classes.greeting}>
                    {getGreeting()}, User
                  </Typography>
                  <Button
                    size='large'
                    className={classes.googleButton}
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                        'google',
                      )
                    }
                  >
                    <img
                      src={google}
                      alt='google'
                      className={classes.googleIcon}
                    />
                    &nbsp;Sign in with Google
                  </Button>
                  <div className={classes.formDividerContainer}>
                    <div className={classes.formDivider} />
                    <Typography className={classes.formDividerWord}>
                      or
                    </Typography>
                    <div className={classes.formDivider} />
                  </div>
                  <Grow
                    in={error}
                    style={
                      !error ? { display: 'none' } : { display: 'inline-block' }
                    }
                  >
                    <Typography className={classes.errorMessage}>
                      Something is wrong with your login or password :(
                    </Typography>
                  </Grow>
                  <Input
                    id='email'
                    InputProps={{
                      classes: {
                        underline: classes.InputUnderline,
                        input: classes.Input,
                      },
                    }}
                    value={loginValue}
                    onChange={(e) => setLoginValue(e.target.value)}
                    margin='normal'
                    placeholder='Email Adress'
                    type='email'
                    fullWidth
                    onKeyDown={(e) => loginOnEnterKey(e)}
                  />
                  <Input
                    id='password'
                    InputProps={{
                      classes: {
                        underline: classes.InputUnderline,
                        input: classes.Input,
                      },
                    }}
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    margin='normal'
                    placeholder='Password'
                    type='password'
                    fullWidth
                    onKeyDown={(e) => loginOnEnterKey(e)}
                  />
                  <div className={classes.formButtons}>
                    {isLoading ? (
                      <CircularProgress
                        size={26}
                        className={classes.loginLoader}
                      />
                    ) : (
                      <Button
                        disabled={!isLoginFormValid()}
                        onClick={() =>
                          loginUser(
                            userDispatch,
                            loginValue,
                            passwordValue,
                            props.history,
                            setIsLoading,
                            setError,
                          )
                        }
                        variant='contained'
                        color='primary'
                        size='large'
                      >
                        Login
                      </Button>
                    )}
                    <Button
                      color='primary'
                      size='large'
                      onClick={() => setIsForgot(!isForgot)}
                      className={classes.forgetButton}
                    >
                      Forgot Password?
                    </Button>
                  </div>
                </React.Fragment>
              )}
              {activeTabId === 1 && (
                <React.Fragment>
                  <Typography variant='h1' className={classes.greeting}>
                    Welcome!
                  </Typography>
                  <Typography variant='h2' className={classes.subGreeting}>
                    Create your account
                  </Typography>
                  <Grow in={error}>
                    <Typography className={classes.errorMessage}>
                      Something is wrong with your login or password :(
                    </Typography>
                  </Grow>
                  <Input
                    id='name'
                    InputProps={{
                      classes: {
                        underline: classes.InputUnderline,
                        input: classes.Input,
                      },
                    }}
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    margin='normal'
                    placeholder='Full Name'
                    type='email'
                    fullWidth
                  />
                  <Input
                    id='email'
                    InputProps={{
                      classes: {
                        underline: classes.InputUnderline,
                        input: classes.Input,
                      },
                    }}
                    value={loginValue}
                    onChange={(e) => setLoginValue(e.target.value)}
                    margin='normal'
                    placeholder='Email Adress'
                    type='email'
                    fullWidth
                  />
                  <Input
                    id='password'
                    InputProps={{
                      classes: {
                        underline: classes.InputUnderline,
                        input: classes.Input,
                      },
                    }}
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    margin='normal'
                    placeholder='Password'
                    type='password'
                    fullWidth
                  />
                  <div className={classes.creatingButtonContainer}>
                    {isLoading ? (
                      <CircularProgress size={26} />
                    ) : (
                      <Button
                        onClick={() =>
                          registerUser(
                            userDispatch,
                            loginValue,
                            passwordValue,
                            props.history,
                            setIsLoading,
                            setError,
                          )()
                        }
                        disabled={
                          loginValue.length === 0 ||
                          passwordValue.length === 0 ||
                          nameValue.length === 0
                        }
                        size='large'
                        variant='contained'
                        color='primary'
                        fullWidth
                        className={classes.createAccountButton}
                      >
                        Create your account
                      </Button>
                    )}
                  </div>
                  <div className={classes.formDividerContainer}>
                    <div className={classes.formDivider} />
                    <Typography className={classes.formDividerWord}>
                      or
                    </Typography>
                    <div className={classes.formDivider} />
                  </div>
                  <Button
                    size='large'
                    className={classnames(
                      classes.googleButton,
                      classes.googleButtonCreating,
                    )}
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                        'google',
                      )
                    }
                  >
                    <img
                      src={google}
                      alt='google'
                      className={classes.googleIcon}
                    />
                    &nbsp;Sign in with Google
                  </Button>
                </React.Fragment>
              )}
            </>
          )}
        </div>
        <Typography color='primary' className={classes.copyright}>
          2014-{new Date().getFullYear()}{' '}
          <a
            style={{ textDecoration: 'none', color: 'inherit' }}
            href='https://flatlogic.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            Flatlogic
          </a>
          , LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
