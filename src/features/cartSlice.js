import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingList: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: ( state, action ) => {
      state.shoppingList.push(action.payload.product);
    },
    removeFromCart: ( state, action ) => {
      
    },

  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;