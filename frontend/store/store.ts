import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { marketSlice } from './slices/marketSlice';
import { appSlice } from './slices/appSlice';
import { userSlice } from './slices/userSlice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
  market: marketSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Infer type: {posts:PostsState, comments: CommentState, users:UsersState}
export type AppDispatch = typeof store.dispatch;
