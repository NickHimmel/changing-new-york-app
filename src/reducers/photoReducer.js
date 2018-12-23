export const photoReducer = (state = [], action) => {
  switch (action.type) {
    case 'START_FETCH_PHOTOS':
      return {
        isFetching: true
      };
    case 'COMPLETE_FETCH_PHOTOS':
      return {
        isFetching: false,
        images: action.data.photos,
        comparison: action.data.comparison
      };
    default:
      return state;
  }
}
