export const photoReducer = (state = [], action) => {
  switch (action.type) {
    case 'START_FETCH_PHOTOS':
      return {
        isFetching: true
      };
    case 'COMPLETE_FETCH_PHOTOS':
      return {
        isFetching: false,
        then_photo: action.data[0].then_photo,
        now_photo: action.data[1].now_photo,
        comparison: action.data[2].comparison
      };
    default:
      return state;
  }
}
