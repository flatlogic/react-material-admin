import React from "react";
import axios from "axios";
import { mockUser } from './mock';
import config from "../../src/config";

async function list() {
  const response = await axios.get(`/users`);
  return response.data;
}

var ManagementStateContext = React.createContext();
var ManagementDispatchContext = React.createContext();
const initialData = {
  findLoading: false,
  saveLoading: false,
  record: null,
  rows: [],
  loading: false,
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
      record: null,
      findLoading: true,
    };
  }

  if (type === 'USERS_FORM_FIND_SUCCESS') {
    return {
      ...state,
      record: payload,
      findLoading: false,
    };
  }

  if (type === 'USERS_FORM_FIND_ERROR') {
    return {
      ...state,
      record: null,
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
      idToDelete: payload.id
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
};


function ManagementProvider({ children }) {
  var [state, dispatch] = React.useReducer(managementReducer, {
    findLoading: false,
    saveLoading: false,
    record: null,
    rows: [],
    loading: false,
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
  var context = React.useContext(ManagementStateContext);
  if (context === undefined) {
    throw new Error("useManagementState must be used within a ManagementProvider");
  }
  return context;
}

function useManagementDispatch() {
  var context = React.useContext(ManagementDispatchContext);
  if (context === undefined) {
    throw new Error("useManagementDispatch must be used within a ManagementProvider");
  }
  return context;
}

// eslint-disable-next-line no-use-before-define
export { ManagementProvider, useManagementState, useManagementDispatch, actions };

// ###########################################################

const actions = {

  doFetch: (filter, keepPagination = false) => async (dispatch) => {
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
  
        await axios.delete(`/users/${id}`)
  
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
          id: id
        },
      });
  },
  doCloseConfirm: () => async (dispatch) => {
      dispatch({
        type: 'USERS_LIST_CLOSE_CONFIRM',
      });
  },
};