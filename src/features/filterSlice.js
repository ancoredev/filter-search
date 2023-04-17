import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  query: "",
  sortBy: "cheap",
  category: "All categories",
  categoriesList: ["All categories"],
  priceRange: [0,2000],
  view: "grid"
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleQuery: ( state, action ) => {
      state.query = action.payload.query;
    },
    switchSortMethod: ( state, action ) => {
      state.sortBy = action.payload.sortBy;
    },
    setCategoryToShow: ( state, action ) => {
      state.category = action.payload.category;
    },
    addToCategoriesList: ( state, action ) => {
      state.categoriesList = action.payload.categories;
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
  setCategoryToShow, addToCategoriesList, // category select actions
  setPriceRange, setLowerPrice, setUpperPrice,  // price range actions
  toggleView,
  }  = filterSlice.actions;
export default filterSlice.reducer;
