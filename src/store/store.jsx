import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import authReducer from "./slices/auth.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  devTools: true,
});

export default store;