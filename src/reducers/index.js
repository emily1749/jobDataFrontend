import { combineReducers } from 'redux';
import onSortReducer from './onSortReducer';
import resultArrayReducer from './resultArrayReducer';

export default combineReducers({
  onSort: onSortReducer,
  resultArray: resultArrayReducer,
});
