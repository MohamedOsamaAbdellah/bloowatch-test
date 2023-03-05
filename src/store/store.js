import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/ProductsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
