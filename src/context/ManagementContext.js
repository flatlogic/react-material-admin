import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import config from '../../src/config';
import { showSnackbar } from '../components/Snackbar';
import {
  createMockUser,
  deleteMockUser,
  findMockUser,
  listMockUsers,
  updateMockUser,
} from '../repositories/usersMockRepository';

async function list(filter = {}) {
  if (!config.isBackend) {
    return listMockUsers(filter, filter.request);
  }

  const query = queryString.stringify({
    page: filter.page,
    limit: filter.limit,
    users: filter.users || '',
    ...(filter.orderBy || {}),
  });
  const request = (filter.request || '').replace(/^(\?|&)+/, '');
  const url = request ? `/users?${query}&${request}` : `/users?${query}`;
  const response = await axios.get(url);

  return response.data;
}

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
      ...state,
      findLoading: false,
      saveLoading: false,
      currentUser: null,
    };
  }

  if (type === 'USERS_FORM_FIND_STARTED') {
    return {
      ...state,
      currentUser: null,
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
  let [state, dispatch] = React.useReducer(managementReducer, initialData);

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

  doFind: (id, options = {}) => async (dispatch) => {
    const { navigate, redirectPath = null } = options;

    dispatch({
      type: 'USERS_FORM_FIND_STARTED',
    });

    if (!id) {
      dispatch({
        type: 'USERS_FORM_FIND_ERROR',
      });
      if (navigate && redirectPath) {
        navigate(redirectPath);
      }
      return;
    }

    if (!config.isBackend) {
      const record = findMockUser(id);

      if (!record) {
        showSnackbar({ type: 'error', message: 'User not found' });
        dispatch({
          type: 'USERS_FORM_FIND_ERROR',
        });
        if (navigate && redirectPath) {
          navigate(redirectPath);
        }
        return;
      }

      dispatch({
        type: 'USERS_FORM_FIND_SUCCESS',
        payload: record,
      });
    } else {
      try {
        const res = await axios.get(`/users/${id}`);
        const currentUser = res.data;
        dispatch({
          type: 'USERS_FORM_FIND_SUCCESS',
          payload: currentUser,
        });
      } catch (error) {
        showSnackbar({ type: 'error', message: 'Error' });
        console.log(error);
        dispatch({
          type: 'USERS_FORM_FIND_ERROR',
        });
        if (navigate && redirectPath) {
          navigate(redirectPath);
        }
      }
    }
  },

  doCreate: (values, navigate, redirectPath = '/app/users') => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_FORM_CREATE_STARTED',
      });

      if (config.isBackend) {
        await axios.post('/users', { data: values });
      } else {
        createMockUser(values);
      }

      dispatch({
        type: 'USERS_FORM_CREATE_SUCCESS',
      });
      showSnackbar({ type: 'success', message: 'Users created' });

      if (navigate && redirectPath) {
        navigate(redirectPath);
      }
    } catch (error) {
      showSnackbar({ type: 'error', message: 'Error' });
      console.log(error);
      dispatch({
        type: 'USERS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, navigate, options = {}) => async (dispatch) => {
    const { redirectPath = '/app/dashboard', isProfile = false } = options;

    try {
      dispatch({
        type: 'USERS_FORM_UPDATE_STARTED',
      });

      let updatedUser = values;
      if (config.isBackend) {
        await axios.put(`/users/${id}`, { id, data: values });
        updatedUser = { id, ...values };
      } else {
        updatedUser = updateMockUser(id, values);
        if (!updatedUser) {
          showSnackbar({ type: 'error', message: 'User not found' });
          dispatch({
            type: 'USERS_FORM_UPDATE_ERROR',
          });
          return;
        }
      }

      syncUserInLocalStorage(updatedUser);

      dispatch({
        type: 'USERS_FORM_UPDATE_SUCCESS',
        payload: updatedUser,
      });

      showSnackbar({
        type: 'success',
        message: isProfile ? 'Profile updated' : 'Users updated',
      });

      if (navigate && redirectPath) {
        navigate(redirectPath);
      }
    } catch (error) {
      showSnackbar({ type: 'error', message: 'Error' });
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
      try {
        dispatch({
          type: 'USERS_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

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
    },

  doDelete: (filter, id) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_LIST_DELETE_STARTED',
      });

      if (config.isBackend) {
        await axios.delete(`/users/${id}`);
      } else {
        deleteMockUser(id);
      }

      dispatch({
        type: 'USERS_LIST_DELETE_SUCCESS',
      });

      const response = await list(filter);
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
