// Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  accountAddress: string | null;
}

const initialState: UserState = {
  accountAddress: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAccount(state, action) {
      state.accountAddress = action.payload;
    },
  },
  extraReducers: {},
});

// Export actions under reducers
export const { updateAccount } = userSlice.actions;
