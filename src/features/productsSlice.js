import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: ( state, action ) => {
      state.productList = action.payload.productList;
    },

  }
});


export const { setProductList } = productsSlice.actions;
export default productsSlice.reducer;