import axios from 'axios';

export const getUuid = (uuid) => {
  return {
    type: 'GET_UUID',
    uuid
  }
};

// export const startFetchPhotos = () => {
//   return {
//     type: 'START_FETCH_PHOTOS'
//   };
// };
//
// export const completeFetchPhotos = (photos) => {
//   return {
//     type: 'COMPLETE_FETCH_PHOTO',
//     photos
//   };
// };
//
// export const fetchPhotos = (uuid) => {
//   return (dispatch, getState) => {
//     dispatch(startFetchPhotos());
//
//     axios.get(`https://changing-new-york-api.herokuapp.com/photos/{uuid}`)
//       .then(responce => {
//         const info = responce.data
//         dispatch(completeFetchPhotos(info))
//       })
//       .catch(error => {
//         throw(error)
//       });
//   };
// };
