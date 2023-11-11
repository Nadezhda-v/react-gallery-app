import axios from 'axios';
import { URL_API, ACCESS_KEY } from '../../api/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const photoRequestAsync = createAsyncThunk(
  'photo/axios',
  (id) => (
    axios(`${URL_API}/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    })
      .then(({ data }) => {
        console.log('data: ', data);
        return { data };
      })
      .catch((error) => ({ error: error.message }))
  )
);
