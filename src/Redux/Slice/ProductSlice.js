import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Supabase/Supabase";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ endpoint }) => {
    try {
      const { data, error } = await supabase.from(endpoint).select("*");
      if (error) throw error;
      return { endpoint, data };
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  season_collection:[],
  snacks_section: [],
  new_arrivals: [],
  gift_hampers: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { endpoint, data } = action.payload;
        state.isLoading = false;
        state[endpoint] = data;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
