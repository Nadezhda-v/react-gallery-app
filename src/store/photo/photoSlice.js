import { createSlice } from '@reduxjs/toolkit';
import { photoRequestAsync } from './photoAction';

const initialState = {
  status: '',
  data: [],
  likes: 0,
  isLiked: false,
  error: '',
  photos: [],
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    updateLike: (state) => {
      state.isLiked = !state.isLiked;
      state.likes += state.isLiked ? 1 : -1;
    },
    setLike: (state, action) => {
      const { id, isLiked, likes } = action.payload;

      // Проверяем, есть ли уже значение для этого id
      const existingPhoto = state.photos.find(photo => photo.id === id);

      if (existingPhoto) {
        // Если есть, обновляем его поля
        existingPhoto.isLiked = isLiked;
        existingPhoto.likes = likes;
      } else {
        // Если нет, добавляем новый объект
        state.photos.push({
          id,
          isLiked,
          likes,
        });
      }
    },
  },
  extraReducers: {
    [photoRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [photoRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload.data;
      state.error = '';
      state.likes = action.payload?.likes || 0;
      state.isLiked = action.payload?.isLiked || false;
    },
    [photoRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  }
});

export const photoReducer = photoSlice.reducer;
