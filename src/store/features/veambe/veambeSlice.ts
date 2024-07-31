import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VeambeStateStructure, VeambeStructure } from "./types";

export const initialVeambeSlice: VeambeStateStructure = {
  artworks: [],
};

const veambeSlice = createSlice({
  name: "artworks",
  initialState: initialVeambeSlice,
  reducers: {
    loadArtwork: (
      currentState,
      action: PayloadAction<VeambeStructure[]>,
    ): VeambeStateStructure => ({
      ...currentState,
      artworks: action.payload,
    }),
  },
});

export const veambeReducer = veambeSlice.reducer;
export const { loadArtwork: loadArtworkActionCreator } = veambeSlice.actions;
