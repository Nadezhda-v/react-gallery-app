import { createSlice } from '@reduxjs/toolkit';
import { galleryRequestAsync } from './galleryAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  page: 1,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    updatePage: state => {
      state.data = [];
      state.page = 0;
    },
  },
  extraReducers: {
    [galleryRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [galleryRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
      state.page += 1;
    },
    [galleryRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export const galleryReducer = gallerySlice.reducer;
