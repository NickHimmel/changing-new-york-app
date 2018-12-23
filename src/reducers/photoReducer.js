export const photoReducer = (state = [], action) => {
  switch (action.type) {
    case 'START_INFO_FETCH':
      return {
        isFetching: true
      };
    case 'COMPLETE_INFO_FETCH':
      return {
        isFetching: false,
        photos: action.photos
      };
    default:
      return state;
  }
}
