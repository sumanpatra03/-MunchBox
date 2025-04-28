import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Supabase/Supabase";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (endpoint) => {
    try {
      const { data, error } = await supabase.from(endpoint).select("*");
      if (error) throw error;
      //   console.log("Fetch Products Data", data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const fetchSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // console.log("Data fetch success", action.payload);
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("Data fetch failed", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchSlice.reducer;
