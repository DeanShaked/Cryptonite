// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface appState {
  isLoading: boolean | null;
  isDarkMode: boolean | null;
}

const initialState: appState = {
  isLoading: false,
  isDarkMode: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleisLoading(state, action) {
      state.isLoading = !state.isLoading;
    },
    isDarkMode(state, action) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: {},
});
