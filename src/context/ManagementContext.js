import React from 'react';
import axios from 'axios';
import { mockUser } from './mock';
import config from '../../src/config';
import { showSnackbar } from '../components/Snackbar';

async function list() {
  const response = await axios.get(`/users`);
  return response.data;
}

let ManagementStateContext = React.createContext();
let ManagementDispatchContext = React.createContext();
const initialData = {
  findLoading: false,
  saveLoading: false,
  currentUser: null,
  rows: [],
  count: null,
  loading: false,
  idToDelete: null,
  modalOpen: false,
};

function managementReducer(state = initialData, { type, payload }) {
  if (type === 'USERS_FORM_RESET') {
    return {
      ...initialData,
    };
  }

  if (type === 'USERS_FORM_FIND_STARTED') {
    return {
      ...state,
      findLoading: true,
    };
  }

  if (type === 'USERS_FORM_FIND_SUCCESS') {
    return {
      ...state,
      currentUser: payload,
      findLoading: false,
    };
  }

  if (type === 'USERS_FORM_FIND_ERROR') {
    return {
      ...state,
      currentUser: null,
      findLoading: false,
    };
  }

  if (type === 'USERS_FORM_CREATE_STARTED') {
    return {
      ...state,
      saveLoading: true,
    };
  }

  if (type === 'USERS_FORM_CREATE_SUCCESS') {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === 'USERS_FORM_CREATE_ERROR') {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === 'USERS_FORM_UPDATE_STARTED') {
    return {
      ...state,
      saveLoading: true,
    };
  }

  if (type === 'USERS_FORM_UPDATE_SUCCESS') {
    return {
      ...state,
      currentUser: payload,
      saveLoading: false,
    };
  }

  if (type === 'USERS_FORM_UPDATE_ERROR') {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === 'USERS_LIST_FETCH_STARTED') {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === 'USERS_LIST_FETCH_SUCCESS') {
    return {
      ...state,
      loading: false,
      count: payload.count,
      rows: payload.rows,
    };
  }

  if (type === 'USERS_LIST_FETCH_ERROR') {
    return {
      ...state,
      loading: false,
      rows: [],
    };
  }

  if (type === 'USERS_LIST_DELETE_STARTED') {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === 'USERS_LIST_DELETE_SUCCESS') {
    return {
      ...state,
      loading: false,
      modalOpen: false,
    };
  }

  if (type === 'USERS_LIST_DELETE_ERROR') {
    return {
      ...state,
      loading: false,
      modalOpen: false,
    };
  }

  if (type === 'USERS_LIST_OPEN_CONFIRM') {
    return {
      ...state,
      loading: false,
      modalOpen: true,
      idToDelete: payload.id,
    };
  }

  if (type === 'USERS_LIST_CLOSE_CONFIRM') {
    return {
      ...state,
      loading: false,
      modalOpen: false,
    };
  }

  return state;
}

function ManagementProvider({ children }) {
  let [state, dispatch] = React.useReducer(managementReducer, {
    findLoading: false,
    saveLoading: false,
    currentUser: null,
    rows: [],
    loading: false,
    idToDelete: null,
    modalOpen: false,
  });

  return (
    <ManagementStateContext.Provider value={state}>
      <ManagementDispatchContext.Provider value={dispatch}>
        {children}
      </ManagementDispatchContext.Provider>
    </ManagementStateContext.Provider>
  );
}

function useManagementState() {
  let context = React.useContext(ManagementStateContext);
  if (context === undefined) {
    throw new Error(
      'useManagementState must be used within a ManagementProvider',
    );
  }
  return context;
}

function useManagementDispatch() {
  let context = React.useContext(ManagementDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useManagementDispatch must be used within a ManagementProvider',
    );
  }
  return context;
}

// ###########################################################

const actions = {
  doNew: () => {
    return {
      type: 'USERS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    if (!config.isBackend) {
      dispatch({
        type: 'USERS_FORM_FIND_SUCCESS',
        payload: mockUser,
      });
    } else {
      try {
        dispatch({
          type: 'USERS_FORM_FIND_STARTED',
        });

        axios.get(`/users/${id}`).then((res) => {
          const currentUser = res.data;
          dispatch({
            type: 'USERS_FORM_FIND_SUCCESS',
            payload: currentUser,
          });
        });
      } catch (error) {
        showSnackbar({ type: 'error', message: 'Error' });
        console.log(error);
        dispatch({
          type: 'USERS_FORM_FIND_ERROR',
        });
      }
    }
  },

  doCreate: (values, history) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_FORM_CREATE_STARTED',
      });
      axios.post('/users', { data: values }).then((res) => {
        dispatch({
          type: 'USERS_FORM_CREATE_SUCCESS',
        });
        history.push('/app/user/list');
      });
    } catch (error) {
      showSnackbar({ type: 'error', message: 'Error' });
      console.log(error);
      dispatch({
        type: 'USERS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, history) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'USERS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/users/${id}`, { id, data: values });

      dispatch({
        type: 'USERS_FORM_UPDATE_SUCCESS',
        payload: values,
      });

      history.push('/admin/dashboard');
    } catch (error) {
      console.log(error);

      dispatch({
        type: 'USERS_FORM_UPDATE_ERROR',
      });
    }
  },

  doChangePassword:
    ({ newPassword, currentPassword }) =>
    async (dispatch) => {
      try {
        dispatch({
          type: 'USERS_FORM_CREATE_STARTED',
        });
        await axios.put('/auth/password-update', {
          newPassword,
          currentPassword,
        });
        dispatch({
          type: 'USERS_PASSWORD_UPDATE_SUCCESS',
        });

        showSnackbar({ type: 'success', message: 'Password updated' });
      } catch (error) {
        showSnackbar({ type: 'error', message: 'Error' });
        console.log(error);

        dispatch({
          type: 'USERS_FORM_CREATE_ERROR',
        });
      }
    },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch) => {
      if (!config.isBackend) {
        dispatch({
          type: 'USERS_LIST_FETCH_SUCCESS',
          payload: {
            rows: [mockUser],
            count: 1,
          },
        });
      } else {
        try {
          dispatch({
            type: 'USERS_LIST_FETCH_STARTED',
            payload: { filter, keepPagination },
          });

          const response = await list();

          dispatch({
            type: 'USERS_LIST_FETCH_SUCCESS',
            payload: {
              rows: response.rows,
              count: response.count,
            },
          });
        } catch (error) {
          showSnackbar({ type: 'error', message: 'Error' });
          console.log(error);

          dispatch({
            type: 'USERS_LIST_FETCH_ERROR',
          });
        }
      }
    },

  doDelete: (id) => async (dispatch) => {
    if (!config.isBackend) {
      dispatch({
        type: 'USERS_LIST_DELETE_ERROR',
      });
    } else {
      try {
        dispatch({
          type: 'USERS_LIST_DELETE_STARTED',
        });

        await axios.delete(`/users/${id}`);

        dispatch({
          type: 'USERS_LIST_DELETE_SUCCESS',
        });
        const response = await list();
        dispatch({
          type: 'USERS_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        showSnackbar({ type: 'error', message: 'Error' });
        console.log(error);
        dispatch({
          type: 'USERS_LIST_DELETE_ERROR',
        });
      }
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
    dispatch({
      type: 'USERS_LIST_OPEN_CONFIRM',
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch) => {
    dispatch({
      type: 'USERS_LIST_CLOSE_CONFIRM',
    });
  },
};

export {
  ManagementProvider,
  useManagementState,
  useManagementDispatch,
  actions,
};
