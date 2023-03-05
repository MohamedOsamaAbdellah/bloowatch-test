import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  cartTotal: 0,
  cartTotalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const productInCart = state.cartProducts.find(
        (item) => item.id === product.id
      );
      if (productInCart) {
        productInCart.quantity++;
        state.cartTotalItems++;
        state.cartTotal += Number(product?.newPrice);
      } else {
        state.cartProducts.push({ ...product, quantity: 1 });
        state.cartTotalItems++;
        state.cartTotal += Number(product?.newPrice);
      }
    },
    deleteFromCart: (state, action) => {
      const product = action.payload;
      const productInCart = state.cartProducts.find(
        (item) => item.id === product.id
      );
      if (productInCart.quantity === 1) {
        state.cartTotalItems--;
        state.cartTotal -= Number(product?.newPrice?.replace(/[^0-9.-]+/g, ""));
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== product.id
        );
      } else {
        productInCart.quantity--;
        state.cartTotalItems--;
        state.cartTotal -= Number(product?.newPrice?.replace(/[^0-9.-]+/g, ""));
      }
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;

export default cartSlice.reducer;
