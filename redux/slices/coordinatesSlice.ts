import { createSlice } from "@reduxjs/toolkit";

import { Coordinates } from "@/lib/types";

const initialState = {
  coordinates: {
    lat: 20.903118,
    lon: 74.774986,
  } as Coordinates,
};

const coordinatesSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    setCoordinates: (state , action) => {
      state.coordinates = action.payload;
    },
  },
});

export const { setCoordinates } = coordinatesSlice.actions;
export default coordinatesSlice.reducer;
