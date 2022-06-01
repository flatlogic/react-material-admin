import { push } from 'connected-react-router';
import { store } from '../../../index';
import { showSnackbar } from '../../Snackbar';

const DEFAULT_ERROR_MESSAGE = 'Error';

function selectErrorMessage(error) {
  if (error && error.response && error.response.data) {
    const data = error.response.data;

    if (data.error && data.error.message) {
      return data.error.message;
    }

    return String(data);
  }

  return error.message || DEFAULT_ERROR_MESSAGE;
}

function selectErrorCode(error) {
  if (error && error.response && error.response.status) {
    return error.response.status;
  }

  return 500;
}

export default class Errors {
  static handle(error) {
    if (process.env.NODE_ENV !== 'test') {
      console.error(selectErrorMessage(error));
      console.error(error);
    }

    if (selectErrorCode(error) === 403) {
      store.dispatch(push('/403'));
      return;
    }

    if (selectErrorCode(error) === 400) {
      showSnackbar({ type: 'error', message: selectErrorMessage(error) });
      return;
    }

    store.dispatch(push('/500'));
  }

  static errorCode(error) {
    return selectErrorCode(error);
  }

  static selectMessage(error) {
    return selectErrorMessage(error);
  }

  static showMessage(error) {
    showSnackbar({ type: 'error', message: selectErrorMessage(error) });
  }
}
