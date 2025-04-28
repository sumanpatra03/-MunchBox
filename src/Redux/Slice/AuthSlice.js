// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../api/axiosInstance";
// import { cart_url } from "../../api/apiUrl";

// const api = cart_url;



// export const addCart = createAsyncThunk("cart/addCart", async (item) => {
//   const  cartItems  = await axiosInstance.get(api);
//   console.log("Current Cart Items:", cartItems.data);

//   const existingItem = cartItems.data.find((cartItem) => cartItem.id === item.id);

//   if (existingItem) {
//     const updatedItem = await axiosInstance.patch(`${api}/${existingItem.id}`, {
//       qty: existingItem.qty + 1,
//     });
//     console.log("Updated Cart Item:", updatedItem.data);
//     return updatedItem.data;
//   }

//   const newItem = await axiosInstance.post(api, { ...item, qty: 1 });
//   console.log("Added New Item to Cart:", newItem.data);
//   return newItem.data;
// });

// export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
//   const res = await axiosInstance.get(api);
//   console.log("fetch data to cart", res.data);
//   return res?.data;
// });

// export const updateCart = createAsyncThunk(
//   "cart/updateCart",
//   async ({ id, qty }) => {
//     const res = await axiosInstance.put(`${api}/${id}`, { qty });
//     console.log("Updated quantity:", res.data);
//     return res?.data;
//   }
// );

// export const deleteCart = createAsyncThunk("cart/deleteCart", async (id) => {
//   await axiosInstance.delete(`${api}/${id}`);
//   console.log("Removed item from cart:", id);
//   return id;
// });

// const calculateTotalPrice = (items) => {
//   return items.reduce((total, item) => total + item.price * (item.qty || 1), 0);
// };

// const initialState = {
//   items: [],
//   totalPrice: 0,
//   isLoading: false,
//   error: null,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,

//   extraReducers: (builder) => {
//     builder

//       .addCase(addCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addCart.fulfilled, (state, action) => {
//         console.log("Data in Success:", action.payload);
//         state.isLoading = false;
//         state.items = [...state.items, action.payload];
//         state.totalPrice = calculateTotalPrice(state.items);
//         state.error = null;
//       })
//       .addCase(addCart.rejected, (state, action) => {
//         console.log("Data fetch failed:", action.error.message);
//         state.isLoading = false;
//         state.error = action.error.message;
//       })

//       .addCase(fetchCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         console.log("fetchData in Success:", action.payload);
//         state.isLoading = false;
//         state.items = action.payload;
//         state.totalPrice = calculateTotalPrice(state.items);
//         state.error = null;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         console.log("Data fetch failed:", action.error.message);
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(updateCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateCart.fulfilled, (state, action) => {
//         console.log("UpdateData in Success:", action.payload);
//         state.isLoading = false;
//         state.items = state.items.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, qty: action.payload.qty }
//             : item
//         );
//         state.totalPrice = calculateTotalPrice(state.items);
//         state.error = null;
//       })
//       .addCase(updateCart.rejected, (state, action) => {
//         console.log("Data fetch failed:", action.error.message);
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(deleteCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteCart.fulfilled, (state, action) => {
//         state.items = state.items.filter((item) => item.id !== action.payload);
//         state.totalPrice = calculateTotalPrice(state.items);
//       })
//       .addCase(deleteCart.rejected, (state, action) => {
//         console.log("Data err failed:", action.error.message);
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default cartSlice.reducer;




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Supabase/Supabase";

 


export const addCart = createAsyncThunk("cart/addCart", async (item) => {
  
  const { data: cartItems, error } = await supabase
    .from("cart") 
    .select("*");

  if (error) throw new Error(error.message);

  
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    
    const { data, error: updateError } = await supabase
      .from("cart")
      .update({ qty: existingItem.qty + 1 })
      .eq("id", existingItem.id);

    if (updateError) throw new Error(updateError.message);
    return data[0]; 
  } else {
    
    const { data, error: insertError } = await supabase
      .from("cart")
      .insert([{ ...item, qty: 1 }]);

    if (insertError) throw new Error(insertError.message);
    return data[0]; 
  }
});


export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const { data, error } = await supabase.from("cart").select("*");

  if (error) throw new Error(error.message);
  return data; 
});


export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ id, qty }) => {
    const { data, error } = await supabase
      .from("cart")
      .update({ qty })
      .eq("id", id);

    if (error) throw new Error(error.message);
    return data[0];
  }
);


export const deleteCart = createAsyncThunk("cart/deleteCart", async (id) => {
  const { error } = await supabase.from("cart").delete().eq("id", id);

  if (error) throw new Error(error.message);
  return id; 
});


const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * (item.qty || 1), 0);
};


const initialState = {
  items: [],
  totalPrice: 0,
  isLoading: false,
  error: null,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(addCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
        state.totalPrice = calculateTotalPrice(state.items);
        state.error = null;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.totalPrice = calculateTotalPrice(state.items);
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        );
        state.totalPrice = calculateTotalPrice(state.items);
        state.error = null;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.totalPrice = calculateTotalPrice(state.items);
        state.error = null;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;

