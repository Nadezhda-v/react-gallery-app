import { createSlice } from '@reduxjs/toolkit';
import { likeRequestAsync } from './likeAction';

const initialState = {
  data: [],
  error: '',
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  extraReducers: {
    [likeRequestAsync.pending.type]: (state) => {
      state.error = '';
    },
    [likeRequestAsync.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.error = '';
    },
    [likeRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const likeReducer = likeSlice.reducer;
