import { configureStore } from "@reduxjs/toolkit";

import loginModalSlice from "@/slices/loginModalSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      loginModal: loginModalSlice,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
