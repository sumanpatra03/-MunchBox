import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/AuthSlice";
import fatchReducer from "../Slice/ProductSlice";
import  userReducer  from "../Slice/userSlice";

const store = configureStore({
  reducer: {
    cart: authReducer,
    products: fatchReducer,
    user:userReducer
  },
});

export default store;
