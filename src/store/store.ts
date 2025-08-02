import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./feature/user.slice";
import { productsReducer } from "./feature/products.slice";
import { categoriesReducer } from "./feature/categories.slice";
export const store = configureStore({
  reducer: {
    userReducer,
    productsReducer,
    categoriesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
