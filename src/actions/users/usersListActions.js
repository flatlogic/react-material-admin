import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';

async function list(filter) {
  const response = await axios.get(
    `/users?page=${filter.page}&limit=${filter.limit}

    &users=${filter.users ? filter.users : ''}
    &${queryString.stringify(filter.orderBy)}${filter.request}`,
  );
  return response.data;
}

async function filterUsers(request, filter) {
  const response = await axios.get(
    `/users?page=${filter.page}&limit=${filter.limit}${request}`,
  );
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

      await axios.delete(`/users/${id}`);

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
