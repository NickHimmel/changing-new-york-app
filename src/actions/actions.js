import axios from 'axios';

export const startFetchPhotos = () => {
  return {
    type: 'START_FETCH_PHOTOS'
  };
};

export const completeFetchPhotos = (photos) => {
  return {
    type: 'COMPLETE_FETCH_PHOTO',
    photos
  };
};

export const fetchPhotos = (uuid) => {
  return (dispatch, getState) => {
    dispatch(startFetchPhotos());
    console.log(uuid)
    axios.get(`https://changing-new-york-api.herokuapp.com/photos/${uuid}`)
      .then(responce => {
        dispatch(completeFetchPhotos(responce))
      })
      .catch(error => {
        throw(error)
      });
  };
};
