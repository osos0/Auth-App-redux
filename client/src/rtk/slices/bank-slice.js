import { createSlice } from "@reduxjs/toolkit";

export const bankslice = createSlice({
  initialState: 100,
  name: "bankslice",
  reducers: {
    withdrow: (state, action) => {
      return state - action.payload;
    },
    deposite: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { withdrow, deposite } = bankslice.actions;
export default bankslice.reducer;
