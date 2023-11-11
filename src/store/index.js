import { tokenMiddleware, tokenReducer } from './token/tokenReducer';
import { authReducer } from './auth/authReducer';
import { galleryReducer } from './gallery/gallerySlice';
import { photoReducer } from './photo/photoSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    gallery: galleryReducer,
    photo: photoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
