import axios from 'axios';
import config from '../../config';
import jwt from 'jsonwebtoken';
import { mockUser } from '../mock';

export const AUTH_FAILURE = 'AUTH_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const RESET_REQUEST = 'RESET_REQUEST';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const PASSWORD_RESET_EMAIL_REQUEST = 'PASSWORD_RESET_EMAIL_REQUEST';
export const PASSWORD_RESET_EMAIL_SUCCESS = 'PASSWORD_RESET_EMAIL_SUCCESS';
export const AUTH_INIT_SUCCESS = 'AUTH_INIT_SUCCESS';
export const AUTH_INIT_ERROR = 'AUTH_INIT_ERROR';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function authError(payload) {
  return {
    type: AUTH_FAILURE,
    payload,
  };
}

export function loginUser(
  dispatch,
  email,
  password,
  history,
  setIsLoading,
  setError,
  social = ""
) {
  if (!config.isBackend) {
    dispatch(receiveToken('token'));
    dispatch(doInit());
    history.push('/app');
  } else {
    dispatch({
      type: LOGIN_REQUEST,
    });
    if (social) {
      window.location.href = config.baseURLApi + "/auth/signin/" + social + '?app=' + config.redirectUrl;
    } else if (email.length > 0 && password.length > 0) {
      axios.post("/auth/signin/local", { email, password }).then(res => {
        const token = res.data;
        dispatch(receiveToken(token));
        dispatch(doInit());
        history.push('/app');
      }).catch(err => {
        console.log(err);
      })
    } else {
      dispatch(authError('Something was wrong. Try again'));
    }
  };
}

export async function doInit (dispatch) {
  let currentUser = null;
  if (!config.isBackend) {
    currentUser = mockUser;
    dispatch({
      type: AUTH_INIT_SUCCESS,
      payload: {
        currentUser,
      },
    });
  } else {
    try {
      let token = localStorage.getItem('token');
      if (token) {
        currentUser = await findMe();
      }
      dispatch({
        type: AUTH_INIT_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: AUTH_INIT_ERROR,
        payload: error,
      });
    }
  }
}

export async function findMe() {
  if (config.isBackend) {
    const response = await axios.get('/auth/me');
    return response.data;    
  } else {
    return mockUser;
  }
}

export function signOut(dispatch, history) {
  dispatch({
    type: LOGOUT_REQUEST,
  });
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  axios.defaults.headers.common['Authorization'] = "";
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  history.push("/login");
}

export function receiveToken(token, dispatch) {
  let user;

  // We check if app runs with backend mode
  if (config.isBackend) {
    user = jwt.decode(token).user;
    delete user.id;
  } else {
    user = {
      email: config.auth.email
    };
  }

  delete user.id;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("theme", "default");
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  dispatch({ type: "LOGIN_SUCCESS" });
}
