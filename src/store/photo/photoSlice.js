import { createSlice } from '@reduxjs/toolkit';
import { photoRequestAsync } from './photoAction';

const initialState = {
  status: '',
  data: [],
  error: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: {
    [photoRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [photoRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload.data;
      state.error = '';
    },
    [photoRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  }
});

export const photoReducer = photoSlice.reducer;
