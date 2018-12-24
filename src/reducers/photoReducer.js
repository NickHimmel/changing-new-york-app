export const photoReducer = (state = [], action) => {
  switch (action.type) {
    case 'START_FETCH_PHOTOS':
      return {
        isFetching: true
      };
    case 'COMPLETE_FETCH_PHOTOS':
      return {
        isFetching: false,
        then_photo: action.data.then_photo,
        now_photo: action.data.now_photo,
        comparison: action.data.comparison
      };
    default:
      return state;
  }
}
