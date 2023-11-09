import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { authReducer } from './auth/authReducer';
import { photosReducer } from './photos/photosSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    photos: photosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
