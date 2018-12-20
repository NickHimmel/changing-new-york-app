export const photosReducer = (state = {isFetching: false, photos: []}, action) => {
  switch (action.type) {
    case 'START_PHOTOS_FETCH':
      return {
        isFetching: true,
      };
    case 'FETCH_PHOTOS':
      return {
        isFetching: false,
        photos: action.photo
      };
    default:
      return state;
  }
}
