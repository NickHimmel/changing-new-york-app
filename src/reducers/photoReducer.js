export const photoReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_UUID':
      return {
        uuid: action.uuid
      };
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
