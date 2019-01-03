import axios from 'axios';

export const getUuid = (uuid) => {
  return {
    type: 'GET_UUID',
    uuid
  };
};

export const startFetchPhotos = () => {
  return {
    type: 'START_FETCH_PHOTOS'
  };
};

export const completeFetchPhotos = (data) => {
  return {
    type: 'COMPLETE_FETCH_PHOTOS',
    data
  };
};

export const fetchPhotos = (uuid) => {
  return (dispatch, getState) => {
    dispatch(startFetchPhotos());
    axios.get(`https://changing-new-york-api.herokuapp.com/photos/${uuid}`)
      .then(responce => {
        dispatch(completeFetchPhotos(responce.data))
      })
      .catch(error => {
        throw(error)
      });
  };
};
