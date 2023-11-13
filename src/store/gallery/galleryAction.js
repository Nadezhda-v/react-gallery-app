import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_KEY } from '../../api/constants';

export const galleryRequestAsync = createAsyncThunk(
  'gallery/axios',
  (_, { getState }) => {
    const prevPhotos = getState().gallery.data;
    const page = getState().gallery.page;
    const token = getState().token.token;

    const headers = {
      'Authorization': `Client-ID ${ACCESS_KEY}`,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axios.get(`https://api.unsplash.com/photos?per_page=30&page=${page}`, {
      headers,
    })
      .then(({ data }) => {
        console.log('data: ', data);
        let newPhotos = data;
        if (page > 1) {
          newPhotos = [...prevPhotos, ...newPhotos];
        }

        return { data: newPhotos };
      })
      .catch((error) => ({ error: error.message }));
  }
);
