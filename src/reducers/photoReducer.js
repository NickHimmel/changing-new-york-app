export const photoReducer = (state = [], action) => {
  switch (action.type) {
    case 'START_FETCH_PHOTOS':
      return {
        isFetching: true
      };
    case 'COMPLETE_FETCH_PHOTOS':
    console.log(action)
      return {
        isFetching: false,
        photos: action.photos
      };
    default:
      return state;
  }
}
