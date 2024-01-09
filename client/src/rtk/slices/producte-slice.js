import {
  createSlice,
  createAsyncThunk,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

export const fetchProducte = createAsyncThunk(
  "productSlice/addProduct",
  async (state, action) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

export const productSlice = createSlice({
  initialState: [{ id: 1, title: "prodect1" }],
  name: "productSlice",
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducte, isPending, (start, action) => {
      //  legical Here
    });
    builder.addCase(fetchProducte, isFulfilled, (state, action) => {
      // logical Here
    });
    builder.addCase(fetchProducte, isRejected, (state, action) => {
      // logical Here
    });
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
