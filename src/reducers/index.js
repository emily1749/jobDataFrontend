import { combineReducers } from 'redux';
import onSortReducer from './onSortReducer';

export default combineReducers({
  onSort: onSortReducer,
});
