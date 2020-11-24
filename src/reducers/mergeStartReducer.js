export default (state = false, action) => {
  switch (action.type) {
    case 'MERGE_START':
      return action.payload;

    default:
      return state;
  }
};
