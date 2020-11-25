import jobData from '../apis/jobData';

export const fetchJobData = (city, state) => async dispatch => {
  const response = await jobData.get(`${city}/${state}`);

  dispatch({ type: 'FETCH_JOB_DATA', payload: response });
};

export const setOnSort = boolean => {
  return {
    type: 'ON_SORT',
    payload: boolean,
  };
};

export const updateResultArray = arr => {
  return {
    type: 'RESULT_ARRAY',
    payload: arr,
  };
};

export const updateBubbleStart = boolean => {
  return {
    type: 'BUBBLE_START',
    payload: boolean,
  };
};

export const updateMergeStart = boolean => {
  return {
    type: 'MERGE_START',
    payload: boolean,
  };
};

export const updateCityLocation = cityLocation => {
  return {
    type: 'CITY_LOCATION',
    payload: cityLocation,
  };
};

export const updateStateLocation = stateLocation => {
  return {
    type: 'STATE_LOCATION',
    payload: stateLocation,
  };
};
