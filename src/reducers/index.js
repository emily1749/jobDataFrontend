import { combineReducers } from 'redux';
import onSortReducer from './onSortReducer';
import resultArrayReducer from './resultArrayReducer';
import bubbleStartReducer from './bubbleStartReducer';
import mergeStartReducer from './mergeStartReducer';
import fetchJobDataReducer from './fetchJobDataReducer';
import cityLocationReducer from './cityLocationReducer';
import stateLocationReducer from './stateLocationReducer';

export default combineReducers({
  onSort: onSortReducer,
  resultArray: resultArrayReducer,
  bubbleStart: bubbleStartReducer,
  mergeStart: mergeStartReducer,
  fetchJobData: fetchJobDataReducer,
  cityLocation: cityLocationReducer,
  stateLocation: stateLocationReducer,
});
