import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';
import history from '../../history';
import config from '../../config';
import {
  createMockUser,
  findMockUser,
  updateMockUser,
} from './usersMockRepository';

function syncUserInLocalStorage(updatedUser) {
  const rawUser = localStorage.getItem('user');

  if (!rawUser || !updatedUser?.id) {
    return;
  }

  try {
    const parsedUser = JSON.parse(rawUser);
    const currentUserId = parsedUser?.user?.id;

    if (!currentUserId || String(currentUserId) !== String(updatedUser.id)) {
      return;
    }

    localStorage.setItem(
      'user',
      JSON.stringify({
        ...parsedUser,
        user: {
          ...parsedUser.user,
          ...updatedUser,
        },
      }),
    );
  } catch (_) {
    return;
  }
}

const actions = {
  doNew: () => {
    return {
      type: 'USERS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    if (!config.isBackend) {
      dispatch({
        type: 'USERS_FORM_FIND_STARTED',
      });

      const record = findMockUser(id);

      if (!record) {
        showSnackbar({ type: 'error', message: 'User not found' });
        dispatch({
          type: 'USERS_FORM_FIND_ERROR',
        });
        history.push('/app/users');
        return;
      }

      dispatch({
        type: 'USERS_FORM_FIND_SUCCESS',
        payload: record,
      });

      return;
    }

    try {
      dispatch({
        type: 'USERS_FORM_FIND_STARTED',
      });

      const res = await axios.get(`/users/${id}`);
      const record = res.data;

      dispatch({
        type: 'USERS_FORM_FIND_SUCCESS',
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_FIND_ERROR',
      });

      history.push('/app/users');
    }
  },

  doCreate: (values) => async (dispatch) => {
    if (!config.isBackend) {
      dispatch({
        type: 'USERS_FORM_CREATE_STARTED',
      });

      createMockUser(values);

      dispatch({
        type: 'USERS_FORM_CREATE_SUCCESS',
      });
      showSnackbar({ type: 'success', message: 'Users created' });
      history.push('/app/users');

      return;
    }

    try {
      dispatch({
        type: 'USERS_FORM_CREATE_STARTED',
      });

      await axios.post('/users', { data: values });
      dispatch({
        type: 'USERS_FORM_CREATE_SUCCESS',
      });
      showSnackbar({ type: 'success', message: 'Users created' });
      history.push('/app/users');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    if (!config.isBackend) {
      dispatch({
        type: 'USERS_FORM_UPDATE_STARTED',
      });

      const updatedUser = updateMockUser(id, values);

      if (!updatedUser) {
        showSnackbar({ type: 'error', message: 'User not found' });
        dispatch({
          type: 'USERS_FORM_UPDATE_ERROR',
        });
        return;
      }

      syncUserInLocalStorage(updatedUser);

      dispatch({
        type: 'USERS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Users updated' });
        history.push('/app/users');
      }

      return;
    }

    try {
      dispatch({
        type: 'USERS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/users/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'USERS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Users updated' });
        history.push('/app/users');
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
