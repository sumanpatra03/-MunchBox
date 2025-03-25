import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/AuthSlice";

const store = configureStore({
  reducer: {
    cart: authReducer,
  },
});

export default store;
