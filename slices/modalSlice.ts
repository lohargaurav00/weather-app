import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openLoginModal: false,
  openSignupModal: false,
  isLoginOrSignup: false,
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    openCloseLoginModal(state) {
      state.openLoginModal = !state.openLoginModal;
    },
    openCloseSignupModal(state) {
      state.openSignupModal = !state.openSignupModal;
    },
    handleIsLoginOrSignup(state) {
      state.isLoginOrSignup = !state.isLoginOrSignup;
    },
  },
});

export const {
  openCloseLoginModal,
  openCloseSignupModal,
  handleIsLoginOrSignup,
} = loginModalSlice.actions;
export default loginModalSlice.reducer;
