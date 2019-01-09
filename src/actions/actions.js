import axios from 'axios';
import { thenPhoto, findByUuid } from '../utils/helpers.js';

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
    Promise.all([
      axios.get(`/api/v1/items/${uuid}?withTitles=yes`),
      axios.get(`/api/v1/mods/${uuid}`),
      axios.get('/photos.json'),
      axios.get('/comparisons.json')
    ]).then (([items, mods, photos, comparisons]) => {
      const photo = findByUuid(photos.data, uuid)[0];
      const comparison = findByUuid(comparisons.data, uuid)[0];
      dispatch(completeFetchPhotos([
        thenPhoto(items, mods),
        {now_photo: photo},
        {comparison: comparison}
      ]))
    }).catch(error => {
      console.log(error.message)
    });
  };
};
