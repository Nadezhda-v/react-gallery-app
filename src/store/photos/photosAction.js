import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_KEY, URL_API } from '../../api/constants';

export const photosRequestAsync = createAsyncThunk(
  'photos/axios',
  (_, { getState }) => {
    // let url;
    const prevPhotos = getState().photos.data;
    const token = getState().token.token;
    const after = getState().photos.after;
    const isLast = getState().photos.isLast;

    if (isLast) {
      return { data: prevPhotos, after };
    }

    console.log('token', token);
    const url = `${URL_API}photos?per_page=9`;


    return axios(`${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Client-ID ${ACCESS_KEY}`,
      },
    })
      .then(({ data }) => {
        console.log('data: ', data);
        return { data };
      })
      .catch((error) => ({ error: error.message }));
  }
);
