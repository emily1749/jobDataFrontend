export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_JOB_DATA':
      return action.payload;
    default:
      return state;
  }
};
