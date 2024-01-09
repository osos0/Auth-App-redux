import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./slices/bank-slice";
import producteSlice from "./slices/producte-slice";

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    product: producteSlice,
  },
});
