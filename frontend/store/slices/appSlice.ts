// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface appState {
  isLoading: boolean;
  isDarkMode: boolean;
  isWalletConnected:boolean;
}

const initialState: appState = {
  isLoading: false,
  isDarkMode: false,
  isWalletConnected: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLoading(state, action) {
      state.isLoading = !state.isLoading;
    },
    toggleDarkMode(state, action) {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleWalletConnected(state, action) {
      state.isWalletConnected = !state.isWalletConnected;
    },
  },
  extraReducers: {

  },
});
