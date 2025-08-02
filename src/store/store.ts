import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./feature/user.slice";
import { productsReducer } from "./feature/products.slice";
export const store = configureStore({
    reducer: {
      userReducer,
      productsReducer,
    },
  })
  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;