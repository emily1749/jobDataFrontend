export default (state = false, action) => {
  switch (action.type) {
    case 'BUBBLE_START':
      return action.payload;

    default:
      return state;
  }
};
