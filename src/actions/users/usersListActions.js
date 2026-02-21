import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';
import config from '../../config';
import { deleteMockUser, listMockUsers } from './usersMockRepository';

async function list(filter) {
  if (!config.isBackend) {
    return listMockUsers(filter);
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

async function filterUsers(request, filter) {
  if (!config.isBackend) {
    return listMockUsers(filter, request);
  }

  const query = queryString.stringify({
    page: filter.page,
    limit: filter.limit,
  });
  const normalizedRequest = (request || '').replace(/^(\?|&)+/, '');
  const url = normalizedRequest
    ? `/users?${query}&${normalizedRequest}`
    : `/users?${query}`;
  const response = await axios.get(url);

  return response.data;
}

const actions = {
  doFilter: (request, filter) => async (dispatch, getState) => {
    try {
      const response = await filterUsers(request, filter);

      dispatch({
        type: 'USERS_LIST_FILTERED',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'USERS_LIST_FETCH_ERROR',
      });
    }
  },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch, getState) => {
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
        Errors.handle(error);

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
      Errors.handle(error);

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

export default actions;
