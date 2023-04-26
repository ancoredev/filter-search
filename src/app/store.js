import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import productsReducer from "../features/productsSlice"
import cartReducer from "../features/cartSlice"

export default configureStore({
  reducer: {
    filter: filterReducer, 
    products: productsReducer,
    cart: cartReducer
  }
})