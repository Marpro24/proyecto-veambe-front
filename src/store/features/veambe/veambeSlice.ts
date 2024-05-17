import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VeambeStateStructure, VeambeStructure } from "./types";

const initialVeambeSlice: VeambeStateStructure = {
  artwork: [],
};

const veambeSlice = createSlice({
  name: "artwork",
  initialState: initialVeambeSlice,
  reducers: {
    loadArtwork: (
      currentState,
      action: PayloadAction<VeambeStructure[]>,
    ): VeambeStateStructure => ({
      ...currentState,
      artwork: action.payload,
    }),
  },
});

export const { loadArtwork: loadArtworkActionCreator } = veambeSlice.actions;
export const veambeReducer = veambeSlice.reducer;
