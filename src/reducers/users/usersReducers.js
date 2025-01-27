import list from 'reducers/users/usersListReducers';
import form from 'reducers/users/usersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
