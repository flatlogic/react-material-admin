import auth from 'reducers/auth';
import { combineReducers } from 'redux';

import users from 'reducers/users/usersReducers';

const createRootReducer = () =>
  combineReducers({
    auth,

    users,
  });

export default createRootReducer;
