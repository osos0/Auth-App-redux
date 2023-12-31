// import { createSlice } from "@reduxjs/toolkit";

// const initatState = {
//   currentUser: null,
//   error: false,
//   loading: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initatState,
//   reducers: {
//     signInStart: (state) => {
//       state.loading = true;
//     },
//     signInSeccess: (state, action) => {
//       state.currentUser = action.payload;
//       state.loading = false;
//       state.error = false;
//     },
//     signInFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { signInStart, signInSeccess, signInFailure } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState, // Corrected typo here
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      // Corrected typo here
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions; // Corrected typo here
export default userSlice.reducer;
