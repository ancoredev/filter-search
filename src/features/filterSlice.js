import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
  name: "filter",
  initialState: {
    query: "",
    sortBy: "cheap",
    brand: "All brands",
    brandList: ["All brands"],
    priceRange: [0,2000],
    view: "grid"
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
    },
    setPriceRange: ( state, action ) => {
      if ( action.payload.priceRange[0] > action.payload.priceRange[1]) {
        state.priceRange = [ action.payload.priceRange[1], action.payload.priceRange[0] ]
      } else {
        state.priceRange = action.payload.priceRange;
      }
    },
    setLowerPrice: ( state, action ) => {
      const lowerPrice = action.payload.lowerPrice < 0 ? 0 : action.payload.lowerPrice;
      if ( lowerPrice > state.priceRange[1]){
        state.priceRange = [state.priceRange[1], state.priceRange[1]];
      } else {
        state.priceRange = [lowerPrice, state.priceRange[1]];
      }
    },
    setUpperPrice: ( state, action ) => {
      const upperPrice = action.payload.upperPrice > 2000 ? 2000 : action.payload.upperPrice;
      if ( upperPrice < state.priceRange[0]){
        state.priceRange = [state.priceRange[0], state.priceRange[0]];
      } else {
        state.priceRange = [state.priceRange[0], upperPrice];
      }
    },
    toggleView: ( state, action ) => {
      state.view = action.payload.view;
    },
  }
})

export const { 
  handleQuery, 
  switchSortMethod, 
  switchBrandShow, addToBrandList, // brand select actions
  setPriceRange, setLowerPrice, setUpperPrice,  // price range actions
  toggleView,
  }  = filterSlice.actions;
export default filterSlice.reducer;
