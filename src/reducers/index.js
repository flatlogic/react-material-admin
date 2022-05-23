import auth from 'reducers/auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,

    users,
  });
