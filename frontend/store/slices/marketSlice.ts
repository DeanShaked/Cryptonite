// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Async thunk
import { fetchUnsoldNfts } from '../asyncThunk';

export interface MarketState {
  value: number;
  unsoledNtfs: Array<Object>;
  purchasedNfts: Array<Object>;
}

const initialState: MarketState = {
  value: 0,
  unsoledNtfs: [{}, {}],
  purchasedNfts: [{}, {}],
};

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {},
  extraReducers: {
  },
});
