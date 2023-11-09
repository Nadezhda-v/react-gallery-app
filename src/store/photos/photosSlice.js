import { createSlice } from '@reduxjs/toolkit';
import { photosRequestAsync } from './photosAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
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
      state.after = '';
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
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [photosRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export const photosReducer = photosSlice.reducer;
