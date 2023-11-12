import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL_API } from '../../api/constants';

export const likeRequestAsync = createAsyncThunk(
  'like/axios',
  ({ id, method }, { getState }) => {
    const token = getState().token.token;

    if (!token) return [];

    return axios(`${URL_API}photos/${id}/like`, {
      method: `${method}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => {
        console.log('data: ', data);
        return { data };
      })
      .catch((error) => ({ error: error.message }));
  }
);
