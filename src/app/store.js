import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import productsReducer from "../features/productsSlice"

export default configureStore({
  reducer: {
    filter: filterReducer, 
    products: productsReducer,

  }
})