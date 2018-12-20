import axios from 'axios';

export const startPhotoFetch = () {
  return {
    type: 'START_PHOTO_FETCH'
  }
}

export const fetchPhotos = (uuid) => {
  return (dispatch, getState) => {
    dispatch(startPhotosFetch());

    axios.get(`https://changing-new-york-api.herokuapp.com/photos/{uuid}`)
      .then(responce => {
        dispatch(completePhotosFetch(responce.data))
      })
      .catch(error => {
        throw(error)
      });
  };
};
