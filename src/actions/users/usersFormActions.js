import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'USERS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_FORM_FIND_STARTED',
      });

      axios.get(`/users/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'USERS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/users'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_FORM_CREATE_STARTED',
      });

      axios.post('/users', { data: values }).then((res) => {
        dispatch({
          type: 'USERS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Users created' });
        dispatch(push('/admin/users'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
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
        dispatch(push('/admin/users'));
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
