import { createSlice } from '@reduxjs/toolkit';
import { galleryRequestAsync } from './galleryAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  isLast: false,
  search: '',
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  extraReducers: {
    [galleryRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [galleryRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
    },
    [galleryRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export const galleryReducer = gallerySlice.reducer;
