import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/ProductsSlice";
import cartReducer from "./cart/CartSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
