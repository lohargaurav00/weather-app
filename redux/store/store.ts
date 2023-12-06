import { configureStore } from "@reduxjs/toolkit";

import coordinatesSlice from "../slices/coordinatesSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      coordinates: coordinatesSlice,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
