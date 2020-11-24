import { combineReducers } from 'redux';
import onSortReducer from './onSortReducer';
import resultArrayReducer from './resultArrayReducer';
import bubbleStartReducer from './bubbleStartReducer';
import mergeStartReducer from './mergeStartReducer';

export default combineReducers({
  onSort: onSortReducer,
  resultArray: resultArrayReducer,
  bubbleStart: bubbleStartReducer,
  mergeStart: mergeStartReducer,
});
