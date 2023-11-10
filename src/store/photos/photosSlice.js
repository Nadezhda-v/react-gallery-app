import { createSlice } from '@reduxjs/toolkit';
import { photosRequestAsync } from './photosAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  isLast: false,
  search: '',
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosClear: (state) => {
      state.loading = false;
      state.data = [];
      state.error = '';
      state.isLast = false;
    },
  },
  extraReducers: {
    [photosRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [photosRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
    },
    [photosRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export const photosReducer = photosSlice.reducer;
