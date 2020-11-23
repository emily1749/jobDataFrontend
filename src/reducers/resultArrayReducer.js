export default (
  state = [
    ['Typescript', 0.2, 0, 0, 0],
    ['Ruby', 1.52, 0, 0, 1],
    ['Python', 27.21, 0, 0, 2],
    ['C++', 22.84, 0, 0, 3],
    ['Golang', 0.4, 0, 0, 9],
    ['Swift', 2.34, 0, 0, 4],
    ['Javascript', 17.16, 0, 0, 5],
    ['PHP', 2.44, 0, 0, 6],
    ['Java', 17.56, 0, 0, 7],
    ['C#', 8.22, 0, 0, 8],
  ],
  action
) => {
  switch (action.type) {
    case 'RESULT_ARRAY':
      return action.payload;
    default:
      return state;
  }
};
