import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_KEY, URL_API } from '../../api/constants';

export const galleryRequestAsync = createAsyncThunk(
  'gallery/axios',
  (page, { getState }) => {
    const prevPhotos = getState().gallery.data;
    const isLast = getState().gallery.isLast;
    console.log('page: ', page);

    if (isLast) {
      return { data: prevPhotos };
    }

    return axios(`${URL_API}photos?per_page=30&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Client-ID ${ACCESS_KEY}`,
      },
    })
      .then(({ data }) => {
        let newPhotos = data;
        newPhotos = [...prevPhotos, ...newPhotos];

        return { data: newPhotos };
      })
      .catch((error) => ({ error: error.message }));
  }
);
