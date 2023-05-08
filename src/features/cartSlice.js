import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsCount: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: ( state, action ) => {
      const { id, price } = action.payload.product;

      const indexExistingProduct = state.products.findIndex(item => item.id === id);
      if (indexExistingProduct >= 0) {
        state.products[indexExistingProduct].quantity += 1;
      } else {
        state.products.push(action.payload.product);
      }
      state.productsCount += 1;
      state.totalPrice += price;
    },
    removeFromCart: ( state, action ) => {
      const { id } = action.payload;
      const index = state.products.findIndex(item => item.id === id);
      
      state.productsCount -= state.products[index].quantity;
      state.totalPrice -= state.products[index].price * state.products[index].quantity;
      state.products = state.products.filter(item => item.id !== id);
    },
    clearCart: ( state, action ) => {
      state.products = [];
      state.productsCount = 0;
      state.totalPrice = 0;
    },
    reduceQuantity: ( state, action ) => {
      const { id } = action.payload;
      const index = state.products.findIndex(item => item.id === id);

      state.productsCount -= 1;
      state.totalPrice -= state.products[index].price;
      if (state.products[index].quantity === 1) {
        state.products = state.products.filter(item => item.id !== id);
      } else{
        state.products[index].quantity -= 1;
      }
    },
    increaseQuantity: ( state, action ) => {
      const id = action.payload.id;
      const index = state.products.findIndex(item => item.id === id);

      state.products[index].quantity += 1;
      state.productsCount += 1;
      state.totalPrice += state.products[index].price;
    },

  }
});


export const { addToCart, 
               removeFromCart, 
               clearCart,
               increaseQuantity,
               reduceQuantity } = cartSlice.actions;
export default cartSlice.reducer;