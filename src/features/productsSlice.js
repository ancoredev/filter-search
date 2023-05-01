import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  thisPageProducts: [],
  currentPage: 1,
  pageCount: 1,
  productsInPage: 9,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: ( state, action ) => {
      state.productList = action.payload.productList;
    },
    setThisPageProducts: ( state, action ) => {
      state.thisPageProducts = action.payload.thisPageProducts;
    },
    setCurrentPage: ( state, action ) => {
      state.currentPage = action.payload.currentPage;
    },
    setPageCount: ( state, action ) => {
      state.pageCount = action.payload.pageCount;
    },
  }
});


export const { setProductList, 
               setCurrentPage, 
               setPageCount,
               setThisPageProducts } = productsSlice.actions;
export default productsSlice.reducer;