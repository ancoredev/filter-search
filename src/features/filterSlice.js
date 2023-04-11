import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
  name: "filter",
  initialState: {
    query: "",
    sortBy: "cheap",
    brand: "All brands",
    brandList: ["All brands"],
  },
  reducers: {
    handleQuery: ( state, action ) => {
      state.query = action.payload.query;
    },
    switchSortMethod: ( state, action ) => {
      state.sortBy = action.payload.sortBy;
    },
    switchBrandShow: ( state, action ) => {
      state.brand = action.payload.brand;
    },
    addToBrandList: ( state, action ) => {
      if (state.brandList.indexOf(action.payload.brand) === -1){
        state.brandList.push(action.payload.brand);
      } 
    }
  }
})

export const { 
  handleQuery, 
  switchSortMethod, 
  switchBrandShow, 
  addToBrandList }  = filterSlice.actions;
export default filterSlice.reducer;
