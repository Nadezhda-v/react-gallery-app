import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_KEY, URL_API } from '../../api/constants';

export const galleryRequestAsync = createAsyncThunk(
  'gallery/axios',
  (page, { getState }) => {
    const prevPhotos = getState().gallery.data;
    const token = getState().token.token;

    const headers = {
      'Authorization': `Client-ID ${ACCESS_KEY}`,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axios(`${URL_API}photos?per_page=30&page=${page}`, {
      headers,
    })
      .then(({ data }) => {
        let newPhotos = data;
        newPhotos = [...prevPhotos, ...newPhotos];

        return { data: newPhotos };
      })
      .catch((error) => ({ error: error.message }));
  }
);
