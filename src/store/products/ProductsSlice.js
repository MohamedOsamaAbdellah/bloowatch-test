import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  enableFilter: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    searchProducts: (state, action) => {
      state.enableFilter = true;
      state.filteredProducts = state.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      // if action.payload is empty, then return all products
    },
    priceFilter: (state, action) => {
      state.enableFilter = true;
      state.filteredProducts = state.products.filter((product) => {
        return (
          product.newPrice >= action.payload.min &&
          product.newPrice <= action.payload.max
        );
      });
    },
    categoryFilter: (state, action) => {
      state.enableFilter = true;
      state.filteredProducts = state.products.filter((product) => {
        return product.category === action.payload.category;
      });
    },
    sortByPriceLowToHigh: (state) => {
      state.products = state.products.sort((a, b) => a.newPrice - b.newPrice);
    },
    sortByPriceHighToLow: (state) => {
      state.products = state.products.sort((a, b) => b.newPrice - a.newPrice);
    },
    sortAtoZ: (state) => {
      state.products = state.products.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    },
    sortZtoA: (state) => {
      state.products = state.products.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    },
  },
});

export const {
  setProducts,
  searchProducts,
  priceFilter,
  categoryFilter,
  sortByPriceLowToHigh,
  sortByPriceHighToLow,
  sortAtoZ,
  sortZtoA,
} = productsSlice.actions;

export default productsSlice.reducer;
