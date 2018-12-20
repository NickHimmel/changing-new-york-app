import axios from 'axios';

export const fetchPhoto = (uuid) => {
  return (dispatch, getState) => {

    axios.get(`https://changing-new-york-api.herokuapp.com/photos/{uuid}`)
      .then(res => {
        dispatch(fetchPhotoSuccess(res.data))
      })
      .catch(error => {
        throw(error)
      });
  };
};
