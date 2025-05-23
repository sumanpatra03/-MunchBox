import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Supabase/Supabase";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ endpoint, id }) => {
    try {
      const query = supabase.from(endpoint).select("*");

      if (id) query.eq("id", id); 

      const { data, error } = await query;
      if (error) throw error;
      return { endpoint, data, id };
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  season_collection: [],
  snacks_section: [],
  new_arrivals: [],
  gift_hampers: [],
  singleProduct: null,
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
        const { endpoint, data, id } = action.payload;
        state.isLoading = false;
        state.error = null;
        if (id) {
          state.singleProduct = data[0] || null;
        } else {
          state[endpoint] = data;
        }
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
