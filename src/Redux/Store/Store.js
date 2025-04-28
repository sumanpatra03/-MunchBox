import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/AuthSlice";
import fatchReducer from "../Slice/ProductSlice";

const store = configureStore({
  reducer: {
    cart: authReducer,
    products: fatchReducer,
  },
});

export default store;
