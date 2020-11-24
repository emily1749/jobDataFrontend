export const onSort = boolean => {
  return {
    type: 'ON_SORT',
    payload: boolean,
  };
};

export const updateResultArray = arr => {
  return {
    type: 'RESULT_ARRAY',
    payload: [...arr],
  };
};
