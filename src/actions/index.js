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
