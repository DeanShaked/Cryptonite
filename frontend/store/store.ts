import { configureStore } from '@reduxjs/toolkit';
import { marketSlice } from './slices/marketSlice';
import { appSlice } from './slices/appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    market: marketSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer type: {posts:PostsState, comments: CommentState, users:UsersState}
export type AppDispatch = typeof store.dispatch;
