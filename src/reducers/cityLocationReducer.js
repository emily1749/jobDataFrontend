export default (state = false, action) => {
  switch (action.type) {
    case 'CITY_LOCATION':
      return action.payload;

    default:
      return state;
  }
};
